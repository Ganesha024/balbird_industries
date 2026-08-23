-- Migration 005: Create strategic_discussion_requests table
-- This table stores requests for strategic discussions

CREATE TABLE IF NOT EXISTS strategic_discussion_requests (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  organization_name TEXT NOT NULL,
  network_type TEXT NOT NULL,
  sector TEXT,
  country_region TEXT NOT NULL,
  pincode TEXT NOT NULL,
  contact_person TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  whatsapp_number TEXT NOT NULL,
  discussion_topics TEXT NOT NULL,
  document_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create updated_at trigger
CREATE TRIGGER update_strategic_discussion_requests_updated_at 
  BEFORE UPDATE ON strategic_discussion_requests
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable RLS
ALTER TABLE strategic_discussion_requests ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to insert requests
CREATE POLICY "Authenticated users can insert strategic discussion requests"
  ON strategic_discussion_requests FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

-- Allow service role to read all requests (for admin access)
CREATE POLICY "Service role can view all strategic discussion requests"
  ON strategic_discussion_requests FOR SELECT
  USING (auth.role() = 'service_role');

-- Allow service role to update all requests
CREATE POLICY "Service role can update strategic discussion requests"
  ON strategic_discussion_requests FOR UPDATE
  USING (auth.role() = 'service_role');

-- Grant necessary permissions
GRANT ALL ON strategic_discussion_requests TO authenticated;
GRANT ALL ON strategic_discussion_requests TO anon;
