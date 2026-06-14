-- Create servers table
CREATE TABLE servers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  invite_url TEXT NOT NULL,
  member_count INT DEFAULT 0,
  is_live BOOLEAN DEFAULT false,
  doc_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create events table
CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  server_id UUID REFERENCES servers(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  date TIMESTAMPTZ NOT NULL,
  is_offline BOOLEAN DEFAULT false,
  ticket_status TEXT CHECK (ticket_status IN ('free', 'ticketed', 'sold_out', 'coming_soon')),
  ticket_price INT,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create blog_posts table
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT NOT NULL,
  server_id UUID REFERENCES servers(id) ON DELETE SET NULL,
  published_at TIMESTAMPTZ,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE servers ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Public read policies
CREATE POLICY "Public can read servers" ON servers FOR SELECT USING (true);
CREATE POLICY "Public can read events" ON events FOR SELECT USING (true);
CREATE POLICY "Public can read published blog posts" ON blog_posts FOR SELECT USING (published = true);

-- Insert initial data
INSERT INTO servers (slug, name, description, tags, invite_url, member_count, is_live) VALUES
('jn', 'Jn.', 'The main hub for general building and community discussions.', ARRAY['community', 'general'], '[SERVER_JN_INVITE]', 1240, true),
('dev', 'Dev', 'Technical deep dives, coding help, and project showcases.', ARRAY['development', 'code'], '[SERVER_DEV_INVITE]', 890, true),
('gg', 'GG', 'Gaming focused community with tournaments and game dev chats.', ARRAY['gaming', 'esports'], '[SERVER_GG_INVITE]', 2100, true),
('study', 'Study', 'Dedicated study groups and learning resources.', ARRAY['learning', 'study'], '', 0, false),
('connect', 'Connect', 'Networking and career opportunities.', ARRAY['networking', 'career'], '', 0, false),
('classic', 'Classic', 'Retro computing and classic gaming.', ARRAY['retro', 'gaming'], '', 0, false);
