-- Create contact_submissions table
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy to allow anyone to insert (public contact form)
CREATE POLICY "Allow public insert" ON contact_submissions FOR INSERT WITH CHECK (true);

-- Policy to allow only admins to read (if we had an admin role)
-- For now, let's just keep it restricted
CREATE POLICY "Allow authenticated read" ON contact_submissions FOR SELECT USING (auth.role() = 'authenticated');
