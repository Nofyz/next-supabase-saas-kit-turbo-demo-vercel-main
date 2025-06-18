export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          password: string
          first_name: string | null
          last_name: string | null
          avatar: string | null
          timezone: string
          language: string
          email_verified: boolean
          is_active: boolean
          last_login_at: string | null
          plan_type: 'FREE_TRIAL' | 'STARTER' | 'PRO' | 'AGENCY' | 'ENTERPRISE'
          subscription_id: string | null
          subscription_ends_at: string | null
          trial_ends_at: string | null
          swipes_this_month: number
          ai_generations_this_month: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          password: string
          first_name?: string | null
          last_name?: string | null
          avatar?: string | null
          timezone?: string
          language?: string
          email_verified?: boolean
          is_active?: boolean
          last_login_at?: string | null
          plan_type?: 'FREE_TRIAL' | 'STARTER' | 'PRO' | 'AGENCY' | 'ENTERPRISE'
          subscription_id?: string | null
          subscription_ends_at?: string | null
          trial_ends_at?: string | null
          swipes_this_month?: number
          ai_generations_this_month?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          password?: string
          first_name?: string | null
          last_name?: string | null
          avatar?: string | null
          timezone?: string
          language?: string
          email_verified?: boolean
          is_active?: boolean
          last_login_at?: string | null
          plan_type?: 'FREE_TRIAL' | 'STARTER' | 'PRO' | 'AGENCY' | 'ENTERPRISE'
          subscription_id?: string | null
          subscription_ends_at?: string | null
          trial_ends_at?: string | null
          swipes_this_month?: number
          ai_generations_this_month?: number
          created_at?: string
          updated_at?: string
        }
      }
      organizations: {
        Row: {
          id: string
          name: string
          slug: string
          logo: string | null
          domain: string | null
          is_white_label: boolean
          custom_branding: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          logo?: string | null
          domain?: string | null
          is_white_label?: boolean
          custom_branding?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          logo?: string | null
          domain?: string | null
          is_white_label?: boolean
          custom_branding?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
      organization_members: {
        Row: {
          id: string
          user_id: string
          organization_id: string
          role: 'OWNER' | 'ADMIN' | 'MEMBER' | 'VIEWER'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          organization_id: string
          role?: 'OWNER' | 'ADMIN' | 'MEMBER' | 'VIEWER'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          organization_id?: string
          role?: 'OWNER' | 'ADMIN' | 'MEMBER' | 'VIEWER'
          created_at?: string
          updated_at?: string
        }
      }
      swipes: {
        Row: {
          id: string
          user_id: string
          title: string | null
          description: string | null
          platform: 'META_FACEBOOK' | 'META_INSTAGRAM' | 'TIKTOK_CREATIVE_CENTER' | 'TIKTOK_ORGANIC' | 'GOOGLE_ADS' | 'YOUTUBE_ADS' | 'WISTIA_VSL' | 'PINTEREST' | 'LINKEDIN' | 'TWITTER_X'
          platform_ad_id: string | null
          platform_url: string | null
          ad_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL' | 'COLLECTION' | 'VSL' | 'UGC_VIDEO' | 'STORY' | 'REEL' | 'SHORT_VIDEO'
          content_url: string | null
          thumbnail_url: string | null
          copy_text: string | null
          call_to_action: string | null
          landing_page_url: string | null
          landing_page_screenshot: string | null
          transcription: string | null
          duration: number | null
          has_audio: boolean
          folder_id: string | null
          is_public: boolean
          is_in_discovery: boolean
          discovery_approved: boolean
          metadata: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title?: string | null
          description?: string | null
          platform: 'META_FACEBOOK' | 'META_INSTAGRAM' | 'TIKTOK_CREATIVE_CENTER' | 'TIKTOK_ORGANIC' | 'GOOGLE_ADS' | 'YOUTUBE_ADS' | 'WISTIA_VSL' | 'PINTEREST' | 'LINKEDIN' | 'TWITTER_X'
          platform_ad_id?: string | null
          platform_url?: string | null
          ad_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL' | 'COLLECTION' | 'VSL' | 'UGC_VIDEO' | 'STORY' | 'REEL' | 'SHORT_VIDEO'
          content_url?: string | null
          thumbnail_url?: string | null
          copy_text?: string | null
          call_to_action?: string | null
          landing_page_url?: string | null
          landing_page_screenshot?: string | null
          transcription?: string | null
          duration?: number | null
          has_audio?: boolean
          folder_id?: string | null
          is_public?: boolean
          is_in_discovery?: boolean
          discovery_approved?: boolean
          metadata?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string | null
          description?: string | null
          platform?: 'META_FACEBOOK' | 'META_INSTAGRAM' | 'TIKTOK_CREATIVE_CENTER' | 'TIKTOK_ORGANIC' | 'GOOGLE_ADS' | 'YOUTUBE_ADS' | 'WISTIA_VSL' | 'PINTEREST' | 'LINKEDIN' | 'TWITTER_X'
          platform_ad_id?: string | null
          platform_url?: string | null
          ad_type?: 'IMAGE' | 'VIDEO' | 'CAROUSEL' | 'COLLECTION' | 'VSL' | 'UGC_VIDEO' | 'STORY' | 'REEL' | 'SHORT_VIDEO'
          content_url?: string | null
          thumbnail_url?: string | null
          copy_text?: string | null
          call_to_action?: string | null
          landing_page_url?: string | null
          landing_page_screenshot?: string | null
          transcription?: string | null
          duration?: number | null
          has_audio?: boolean
          folder_id?: string | null
          is_public?: boolean
          is_in_discovery?: boolean
          discovery_approved?: boolean
          metadata?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
      media_files: {
        Row: {
          id: string
          swipe_id: string
          file_name: string
          original_name: string | null
          file_size: number
          mime_type: string
          url: string
          original_url: string | null
          type: 'IMAGE' | 'VIDEO' | 'AUDIO' | 'DOCUMENT' | 'THUMBNAIL'
          width: number | null
          height: number | null
          duration: number | null
          frame_rate: number | null
          bitrate: number | null
          created_at: string
        }
        Insert: {
          id?: string
          swipe_id: string
          file_name: string
          original_name?: string | null
          file_size: number
          mime_type: string
          url: string
          original_url?: string | null
          type: 'IMAGE' | 'VIDEO' | 'AUDIO' | 'DOCUMENT' | 'THUMBNAIL'
          width?: number | null
          height?: number | null
          duration?: number | null
          frame_rate?: number | null
          bitrate?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          swipe_id?: string
          file_name?: string
          original_name?: string | null
          file_size?: number
          mime_type?: string
          url?: string
          original_url?: string | null
          type?: 'IMAGE' | 'VIDEO' | 'AUDIO' | 'DOCUMENT' | 'THUMBNAIL'
          width?: number | null
          height?: number | null
          duration?: number | null
          frame_rate?: number | null
          bitrate?: number | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      plan_type: 'FREE_TRIAL' | 'STARTER' | 'PRO' | 'AGENCY' | 'ENTERPRISE'
      organization_role: 'OWNER' | 'ADMIN' | 'MEMBER' | 'VIEWER'
      platform: 'META_FACEBOOK' | 'META_INSTAGRAM' | 'TIKTOK_CREATIVE_CENTER' | 'TIKTOK_ORGANIC' | 'GOOGLE_ADS' | 'YOUTUBE_ADS' | 'WISTIA_VSL' | 'PINTEREST' | 'LINKEDIN' | 'TWITTER_X'
      ad_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL' | 'COLLECTION' | 'VSL' | 'UGC_VIDEO' | 'STORY' | 'REEL' | 'SHORT_VIDEO'
      media_type: 'IMAGE' | 'VIDEO' | 'AUDIO' | 'DOCUMENT' | 'THUMBNAIL'
    }
  }
} 