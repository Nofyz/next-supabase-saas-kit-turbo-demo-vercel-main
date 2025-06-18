-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create enum types
CREATE TYPE plan_type AS ENUM ('FREE_TRIAL', 'STARTER', 'PRO', 'AGENCY', 'ENTERPRISE');
CREATE TYPE organization_role AS ENUM ('OWNER', 'ADMIN', 'MEMBER', 'VIEWER');
CREATE TYPE platform AS ENUM (
    'META_FACEBOOK',
    'META_INSTAGRAM',
    'TIKTOK_CREATIVE_CENTER',
    'TIKTOK_ORGANIC',
    'GOOGLE_ADS',
    'YOUTUBE_ADS',
    'WISTIA_VSL',
    'PINTEREST',
    'LINKEDIN',
    'TWITTER_X'
);
CREATE TYPE ad_type AS ENUM (
    'IMAGE',
    'VIDEO',
    'CAROUSEL',
    'COLLECTION',
    'VSL',
    'UGC_VIDEO',
    'STORY',
    'REEL',
    'SHORT_VIDEO'
);
CREATE TYPE media_type AS ENUM ('IMAGE', 'VIDEO', 'AUDIO', 'DOCUMENT', 'THUMBNAIL');

-- Create users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    first_name TEXT,
    last_name TEXT,
    avatar TEXT,
    timezone TEXT DEFAULT 'UTC',
    language TEXT DEFAULT 'en',
    email_verified BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    last_login_at TIMESTAMP WITH TIME ZONE,
    plan_type plan_type DEFAULT 'FREE_TRIAL',
    subscription_id TEXT,
    subscription_ends_at TIMESTAMP WITH TIME ZONE,
    trial_ends_at TIMESTAMP WITH TIME ZONE,
    swipes_this_month INTEGER DEFAULT 0,
    ai_generations_this_month INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create organizations table
CREATE TABLE organizations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    logo TEXT,
    domain TEXT,
    is_white_label BOOLEAN DEFAULT false,
    custom_branding JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create organization_members table
CREATE TABLE organization_members (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
    role organization_role DEFAULT 'MEMBER',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, organization_id)
);

-- Create folders table
CREATE TABLE folders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create swipes table
CREATE TABLE swipes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    title TEXT,
    description TEXT,
    platform platform NOT NULL,
    platform_ad_id TEXT,
    platform_url TEXT,
    ad_type ad_type NOT NULL,
    content_url TEXT,
    thumbnail_url TEXT,
    copy_text TEXT,
    call_to_action TEXT,
    landing_page_url TEXT,
    landing_page_screenshot TEXT,
    transcription TEXT,
    duration INTEGER,
    has_audio BOOLEAN DEFAULT false,
    folder_id UUID REFERENCES folders(id) ON DELETE SET NULL,
    is_public BOOLEAN DEFAULT false,
    is_in_discovery BOOLEAN DEFAULT false,
    discovery_approved BOOLEAN DEFAULT false,
    metadata JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create media_files table
CREATE TABLE media_files (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    swipe_id UUID REFERENCES swipes(id) ON DELETE CASCADE,
    file_name TEXT NOT NULL,
    original_name TEXT,
    file_size INTEGER NOT NULL,
    mime_type TEXT NOT NULL,
    url TEXT NOT NULL,
    original_url TEXT,
    type media_type NOT NULL,
    width INTEGER,
    height INTEGER,
    duration INTEGER,
    frame_rate FLOAT,
    bitrate INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create RLS policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE organization_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE folders ENABLE ROW LEVEL SECURITY;
ALTER TABLE swipes ENABLE ROW LEVEL SECURITY;
ALTER TABLE media_files ENABLE ROW LEVEL SECURITY;

-- Create policies for users
CREATE POLICY "Users can view their own data" ON users
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own data" ON users
    FOR UPDATE USING (auth.uid() = id);

-- Create policies for organizations
CREATE POLICY "Organization members can view their organizations" ON organizations
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM organization_members
            WHERE organization_members.organization_id = organizations.id
            AND organization_members.user_id = auth.uid()
        )
    );

-- Create policies for swipes
CREATE POLICY "Users can view their own swipes" ON swipes
    FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can create their own swipes" ON swipes
    FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own swipes" ON swipes
    FOR UPDATE USING (user_id = auth.uid());

CREATE POLICY "Users can delete their own swipes" ON swipes
    FOR DELETE USING (user_id = auth.uid());

-- Create indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_organizations_slug ON organizations(slug);
CREATE INDEX idx_swipes_user_id ON swipes(user_id);
CREATE INDEX idx_swipes_folder_id ON swipes(folder_id);
CREATE INDEX idx_media_files_swipe_id ON media_files(swipe_id); 