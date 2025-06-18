// SwipeBuilder.io - Complete Prisma Schema
// Generated based on PRD requirements

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ================================
// USER MANAGEMENT & AUTHENTICATION
// ================================

model User {
  id                String   @id @default(cuid())
  email             String   @unique
  password          String
  firstName         String?
  lastName          String?
  avatar            String?
  timezone          String   @default("UTC")
  language          String   @default("en")
  
  // Account status
  emailVerified     Boolean  @default(false)
  isActive          Boolean  @default(true)
  lastLoginAt       DateTime?
  
  // Subscription info
  planType          PlanType @default(FREE_TRIAL)
  subscriptionId    String?
  subscriptionEndsAt DateTime?
  trialEndsAt       DateTime?
  
  // Usage limits
  swipesThisMonth   Int      @default(0)
  aiGenerationsThisMonth Int @default(0)
  
  // Relations
  swipes            Swipe[]
  folders           Folder[]
  boards            Board[]
  boardMembers      BoardMember[]
  comments          Comment[]
  aiGenerations     AiGeneration[]
  analytics         UserAnalytics[]
  
  // Teams & Organizations
  organizationMembers OrganizationMember[]
  
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
  
  @@map("users")
}

enum PlanType {
  FREE_TRIAL
  STARTER
  PRO
  AGENCY
  ENTERPRISE
}

// ================================
// ORGANIZATIONS & TEAMS
// ================================

model Organization {
  id                String   @id @default(cuid())
  name              String
  slug              String   @unique
  logo              String?
  domain            String?
  
  // Settings
  isWhiteLabel      Boolean  @default(false)
  customBranding    Json?
  
  // Relations
  members           OrganizationMember[]
  boards            Board[]
  
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
  
  @@map("organizations")
}

model OrganizationMember {
  id             String           @id @default(cuid())
  userId         String
  organizationId String
  role           OrganizationRole @default(MEMBER)
  
  user           User         @relation(fields: [userId], references: [id], onDelete: Cascade)
  organization   Organization @relation(fields: [organizationId], references: [id], onDelete: Cascade)
  
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt
  
  @@unique([userId, organizationId])
  @@map("organization_members")
}

enum OrganizationRole {
  OWNER
  ADMIN
  MEMBER
  VIEWER
}

// ================================
// CORE SWIPE FUNCTIONALITY
// ================================

model Swipe {
  id                String      @id @default(cuid())
  userId            String
  
  // Basic info
  title             String?
  description       String?
  
  // Platform info
  platform          Platform
  platformAdId      String?     // Original ad ID from platform
  platformUrl       String?     // Original URL where found
  
  // Content
  adType            AdType
  contentUrl        String?     // Main creative URL (image/video)
  thumbnailUrl      String?     // Thumbnail for videos
  copyText          String?     // Ad copy text
  callToAction      String?
  
  // Media files
  mediaFiles        MediaFile[]
  
  // Landing page
  landingPageUrl    String?
  landingPageScreenshot String?
  
  // Video specific
  transcription     String?     // Auto-generated transcription
  duration          Int?        // Duration in seconds
  hasAudio          Boolean     @default(false)
  
  // Analytics data
  analytics         SwipeAnalytics?
  
  // Organization
  folderId          String?
  tags              SwipeTag[]
  
  // Sharing
  isPublic          Boolean     @default(false)
  isInDiscovery     Boolean     @default(false)
  discoveryApproved Boolean     @default(false)
  
  // Metadata
  metadata          Json?       // Additional platform-specific data
  
  // Relations
  user              User        @relation(fields: [userId], references: [id], onDelete: Cascade)
  folder            Folder?     @relation(fields: [folderId], references: [id], onDelete: SetNull)
  boardSwipes       BoardSwipe[]
  comments          Comment[]
  aiGenerations     AiGeneration[]
  
  createdAt         DateTime    @default(now())
  updatedAt         DateTime    @updatedAt
  
  @@map("swipes")
}

enum Platform {
  META_FACEBOOK
  META_INSTAGRAM
  TIKTOK_CREATIVE_CENTER
  TIKTOK_ORGANIC
  GOOGLE_ADS
  YOUTUBE_ADS
  WISTIA_VSL
  PINTEREST
  LINKEDIN
  TWITTER_X
}

enum AdType {
  IMAGE
  VIDEO
  CAROUSEL
  COLLECTION
  VSL
  UGC_VIDEO
  STORY
  REEL
  SHORT_VIDEO
}

// ================================
// MEDIA FILES & ASSETS
// ================================

model MediaFile {
  id            String    @id @default(cuid())
  swipeId       String
  
  // File info
  fileName      String
  originalName  String?
  fileSize      Int       // Size in bytes
  mimeType      String
  
  // URLs
  url           String    // CDN URL
  originalUrl   String?   // Original platform URL
  
  // File type
  type          MediaType
  
  // Image specific
  width         Int?
  height        Int?
  
  // Video specific
  duration      Int?      // Duration in seconds
  frameRate     Float?
  bitrate       Int?
  
  // Relations
  swipe         Swipe     @relation(fields: [swipeId], references: [id], onDelete: Cascade)
  
  createdAt     DateTime  @default(now())
  
  @@map("media_files")
}

enum MediaType {
  IMAGE
  VIDEO
  AUDIO
  DOCUMENT
  THUMBNAIL
}

// ================================
// ANALYTICS & INSIGHTS
// ================================

model SwipeAnalytics {
  id                    String  @id @default(cuid())
  swipeId               String  @unique
  
  // Platform metrics (when available)
  views                 BigInt?
  likes                 Int?
  shares                Int?
  comments              Int?
  
  // YouTube specific
  youtubeViews          BigInt? // For unlisted videos
  
  // VSL specific
  vslPlays              Int?
  vslCompletionRate     Float?
  
  // Engagement metrics
  engagementRate        Float?
  
  // Performance indicators
  isHighPerforming      Boolean @default(false)
  performanceScore      Float?
  
  // Hidden analytics (scraped data)
  hiddenMetrics         Json?
  
  // Relations
  swipe                 Swipe   @relation(fields: [swipeId], references: [id], onDelete: Cascade)
  
  createdAt             DateTime @default(now())
  updatedAt             DateTime @updatedAt
  
  @@map("swipe_analytics")
}

model UserAnalytics {
  id                    String   @id @default(cuid())
  userId                String
  date                  DateTime @db.Date
  
  // Usage metrics
  swipesSaved           Int      @default(0)
  aiGenerations         Int      @default(0)
  boardsCreated         Int      @default(0)
  commentsPosted        Int      @default(0)
  
  // Platform breakdown
  metaSwipes            Int      @default(0)
  tiktokSwipes          Int      @default(0)
  googleSwipes          Int      @default(0)
  wistiaSwipes          Int      @default(0)
  
  user                  User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@unique([userId, date])
  @@map("user_analytics")
}

// ================================
// ORGANIZATION SYSTEM
// ================================

model Folder {
  id                String   @id @default(cuid())
  userId            String
  parentId          String?  // For hierarchical folders
  
  name              String
  description       String?
  color             String?  // Hex color for UI
  emoji             String?  // Optional emoji
  
  // Settings
  isPrivate         Boolean  @default(true)
  
  // Relations
  user              User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  parent            Folder?  @relation("FolderHierarchy", fields: [parentId], references: [id], onDelete: Cascade)
  children          Folder[] @relation("FolderHierarchy")
  swipes            Swipe[]
  
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
  
  @@map("folders")
}

model SwipeTag {
  id        String @id @default(cuid())
  swipeId   String
  tag       String
  
  swipe     Swipe  @relation(fields: [swipeId], references: [id], onDelete: Cascade)
  
  @@unique([swipeId, tag])
  @@map("swipe_tags")
}

// ================================
// BOARDS & COLLABORATION
// ================================

model Board {
  id                String        @id @default(cuid())
  userId            String        // Owner
  organizationId    String?       // Optional organization
  
  // Basic info
  name              String
  description       String?
  emoji             String?
  
  // Sharing settings
  isPublic          Boolean       @default(false)
  shareSlug         String?       @unique // For public sharing
  allowComments     Boolean       @default(true)
  
  // Settings
  theme             String?       // Custom theme
  coverImage        String?
  
  // Relations
  user              User          @relation(fields: [userId], references: [id], onDelete: Cascade)
  organization      Organization? @relation(fields: [organizationId], references: [id], onDelete: SetNull)
  members           BoardMember[]
  swipes            BoardSwipe[]
  comments          Comment[]
  
  createdAt         DateTime      @default(now())
  updatedAt         DateTime      @updatedAt
  
  @@map("boards")
}

model BoardMember {
  id            String          @id @default(cuid())
  boardId       String
  userId        String
  role          BoardRole       @default(VIEWER)
  
  board         Board           @relation(fields: [boardId], references: [id], onDelete: Cascade)
  user          User            @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  createdAt     DateTime        @default(now())
  
  @@unique([boardId, userId])
  @@map("board_members")
}

enum BoardRole {
  OWNER
  EDITOR
  COMMENTER
  VIEWER
}

model BoardSwipe {
  id            String   @id @default(cuid())
  boardId       String
  swipeId       String
  
  // Positioning
  position      Int      @default(0)
  
  // Custom data for this board
  notes         String?
  customTitle   String?
  
  board         Board    @relation(fields: [boardId], references: [id], onDelete: Cascade)
  swipe         Swipe    @relation(fields: [swipeId], references: [id], onDelete: Cascade)
  
  createdAt     DateTime @default(now())
  
  @@unique([boardId, swipeId])
  @@map("board_swipes")
}

model Comment {
  id            String    @id @default(cuid())
  userId        String
  swipeId       String?   // Comment on swipe
  boardId       String?   // Comment on board
  parentId      String?   // Reply to comment
  
  content       String
  isResolved    Boolean   @default(false)
  
  // Relations
  user          User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  swipe         Swipe?    @relation(fields: [swipeId], references: [id], onDelete: Cascade)
  board         Board?    @relation(fields: [boardId], references: [id], onDelete: Cascade)
  parent        Comment?  @relation("CommentReplies", fields: [parentId], references: [id], onDelete: Cascade)
  replies       Comment[] @relation("CommentReplies")
  
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  @@map("comments")
}

// ================================
// AI COPYWRITER SYSTEM
// ================================

model AiGeneration {
  id                String           @id @default(cuid())
  userId            String
  swipeId           String?          // Source swipe (if any)
  
  // Input data
  title             String
  informationDump   String           // Product/service info
  targetAudience    String?
  productName       String?
  brandVoice        String?
  additionalContext String?
  
  // Generation settings
  copyType          AiCopyType
  platform          Platform?
  tone              String?
  
  // Output
  generatedCopy     String
  alternativeVersions String[]       // Multiple variations
  
  // Metadata
  modelUsed         String           // Which AI model
  promptVersion     String           // Version of prompt used
  processingTime    Int?             // Time in milliseconds
  
  // User feedback
  rating            Int?             // 1-5 stars
  feedback          String?
  isBookmarked      Boolean          @default(false)
  
  // Relations
  user              User             @relation(fields: [userId], references: [id], onDelete: Cascade)
  swipe             Swipe?           @relation(fields: [swipeId], references: [id], onDelete: SetNull)
  
  createdAt         DateTime         @default(now())
  updatedAt         DateTime         @updatedAt
  
  @@map("ai_generations")
}

enum AiCopyType {
  AD_SCRIPT
  EMAIL_COPY
  ADVERTORIAL
  VSL_SCRIPT
  LANDING_PAGE
  SOCIAL_POST
  SMS_COPY
}

// ================================
// DISCOVERY & COMMUNITY
// ================================

model DiscoveryAd {
  id                String           @id @default(cuid())
  swipeId           String           @unique
  
  // Curation info
  curatedBy         String?          // User who submitted
  approvedBy        String?          // Admin who approved
  
  // Classification
  vertical          String?          // Industry/niche
  adObjective       String?          // Lead gen, sales, etc.
  targetDemographic String?
  
  // Performance indicators
  estimatedBudget   String?          // Small, medium, large
  campaignDuration  String?
  
  // Community metrics
  views             Int              @default(0)
  saves             Int              @default(0)
  
  swipe             Swipe            @relation(fields: [swipeId], references: [id], onDelete: Cascade)
  
  createdAt         DateTime         @default(now())
  updatedAt         DateTime         @updatedAt
  
  @@map("discovery_ads")
}

// ================================
// INTEGRATIONS & PARTNERSHIPS
// ================================

model Integration {
  id                String           @id @default(cuid())
  userId            String
  
  // Integration type
  type              IntegrationType
  
  // Credentials (encrypted)
  credentials       Json
  
  // Settings
  isActive          Boolean          @default(true)
  settings          Json?
  
  // Status
  lastSync          DateTime?
  syncStatus        SyncStatus       @default(PENDING)
  errorMessage      String?
  
  user              User             @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  createdAt         DateTime         @default(now())
  updatedAt         DateTime         @updatedAt
  
  @@map("integrations")
}

enum IntegrationType {
  FACEBOOK_ADS
  GOOGLE_ADS
  TIKTOK_ADS
  UGC_CREATOR_HUB
  HORMOZI_SUBTITLES
  VOICE_OVER_SERVICE
}

enum SyncStatus {
  PENDING
  ACTIVE
  ERROR
  DISABLED
}

// ================================
// URL TRANSCRIBE & TOOLS
// ================================

model UrlTranscribe {
  id                String   @id @default(cuid())
  userId            String
  
  // Input
  url               String
  
  // Output
  extractedData     Json     // Structured data from URL
  rawContent        String?  // Raw HTML/text content
  
  // Processing info
  processingTime    Int?     // Time in milliseconds
  status            String   @default("completed")
  
  user              User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  createdAt         DateTime @default(now())
  
  @@map("url_transcribes")
}

// ================================
// SYSTEM & ADMIN
// ================================

model SystemSetting {
  id        String @id @default(cuid())
  key       String @unique
  value     Json
  
  updatedAt DateTime @updatedAt
  
  @@map("system_settings")
}

model AdminLog {
  id            String   @id @default(cuid())
  userId        String?  // Admin user
  action        String
  resourceType  String?  // users, swipes, etc.
  resourceId    String?
  details       Json?
  ipAddress     String?
  
  createdAt     DateTime @default(now())
  
  @@map("admin_logs")
}

// ================================
// USAGE TRACKING & LIMITS
// ================================

model UsageLimit {
  id                String   @id @default(cuid())
  planType          PlanType
  
  // Monthly limits
  maxSwipes         Int      @default(-1) // -1 = unlimited
  maxAiGenerations  Int      @default(-1)
  maxBoards         Int      @default(-1)
  maxTeamMembers    Int      @default(-1)
  
  // Feature flags
  hasDiscoveryAccess Boolean @default(false)
  hasAnalytics      Boolean  @default(false)
  hasWhiteLabel     Boolean  @default(false)
  hasApiAccess      Boolean  @default(false)
  
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
  
  @@unique([planType])
  @@map("usage_limits")
}

// ================================
// CHROME EXTENSION DATA
// ================================

model ExtensionSession {
  id                String   @id @default(cuid())
  userId            String
  
  // Session info
  sessionId         String   @unique
  userAgent         String?
  extensionVersion  String?
  
  // Activity
  lastActivity      DateTime @default(now())
  swipesThisSession Int      @default(0)
  
  user              User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
  
  @@map("extension_sessions")
}

model PlatformStatus {
  id                String   @id @default(cuid())
  platform          Platform @unique
  
  // Status
  isActive          Boolean  @default(true)
  lastChecked       DateTime @default(now())
  errorMessage      String?
  
  // Metrics
  successRate       Float?   // % of successful swipes
  avgResponseTime   Int?     // ms
  
  updatedAt         DateTime @updatedAt
  
  @@map("platform_status")
}