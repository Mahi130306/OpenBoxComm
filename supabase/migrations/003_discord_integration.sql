-- Update existing users table to better support Discord OAuth and metadata
ALTER TABLE public.users RENAME TO profiles;

-- Ensure profiles is linked to auth.users if possible, but the current schema uses UUID PRIMARY KEY
-- In Supabase, it's best if the ID matches auth.users.id

-- Create user_guilds table
CREATE TABLE IF NOT EXISTS public.user_guilds (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL, -- Will link to profiles.id
  guild_id TEXT NOT NULL,
  guild_name TEXT NOT NULL,
  guild_icon TEXT,
  roles TEXT[] DEFAULT '{}',
  is_owner BOOLEAN DEFAULT false,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, guild_id)
);

-- Create user_tokens table for Discord tokens
CREATE TABLE IF NOT EXISTS public.user_tokens (
  user_id UUID PRIMARY KEY,
  access_token TEXT NOT NULL,
  refresh_token TEXT NOT NULL,
  expires_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.user_guilds ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_tokens ENABLE ROW LEVEL SECURITY;

-- RLS Policies
-- Profiles already had a policy from 001, but we renamed it.
-- The previous policy was: CREATE POLICY "Users can read own data" ON users FOR SELECT USING (auth.uid() = id);
-- Since we renamed users to profiles, we might need to recreate or it might have followed.
-- Let's be explicit.

DROP POLICY IF EXISTS "Users can read own data" ON public.profiles;
CREATE POLICY "Users can read own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can read own guilds" ON public.user_guilds FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can read own tokens" ON public.user_tokens FOR SELECT USING (auth.uid() = user_id);

-- Function to handle user profile creation/update from auth
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, discord_username, avatar_url, discord_id)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', 'User'),
    NEW.raw_user_meta_data->>'avatar_url',
    NEW.raw_user_meta_data->>'provider_id' -- Supabase stores provider id here
  )
  ON CONFLICT (id) DO UPDATE SET
    email = EXCLUDED.email,
    discord_username = EXCLUDED.discord_username,
    avatar_url = EXCLUDED.avatar_url,
    discord_id = EXCLUDED.discord_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new users
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
