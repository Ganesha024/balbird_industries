-- Migration 006: Create join_network_requests table
-- This table stores requests to join the network

CREATE TABLE IF NOT EXISTS join_network_requests (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  organization_name TEXT NOT NULL,
  sector TEXT,
  country TEXT NOT NULL,
  pincode TEXT NOT NULL,
  contact_person TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  whatsapp_number TEXT NOT NULL,
  role_description TEXT,
  selected_role TEXT NOT NULL,
  role_specific_data JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create updated_at trigger
CREATE TRIGGER update_join_network_requests_updated_at 
  BEFORE UPDATE ON join_network_requests
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable RLS
ALTER TABLE join_network_requests ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to insert requests
CREATE POLICY "Authenticated users can insert join network requests"
  ON join_network_requests FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

-- Allow service role to read all requests (for admin access)
CREATE POLICY "Service role can view all join network requests"
  ON join_network_requests FOR SELECT
  USING (auth.role() = 'service_role');

-- Allow service role to update all requests
CREATE POLICY "Service role can update join network requests"
  ON join_network_requests FOR UPDATE
  USING (auth.role() = 'service_role');

-- Grant necessary permissions
GRANT ALL ON join_network_requests TO authenticated;
GRANT ALL ON join_network_requests TO anon;
