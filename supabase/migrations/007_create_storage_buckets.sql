-- Migration 007: Create storage buckets for file uploads
-- This creates the storage buckets used for document uploads

-- Create company_profiles storage bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('company_profiles', 'company_profiles', true)
ON CONFLICT DO NOTHING;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Public Access company_profiles" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload to company_profiles" ON storage.objects;
DROP POLICY IF EXISTS "Service role can manage company_profiles" ON storage.objects;

-- Create policies for company_profiles bucket
-- Allow public access (since files are accessed via public URLs)
CREATE POLICY "Public Access company_profiles"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'company_profiles');

-- Allow authenticated users to upload files
CREATE POLICY "Authenticated users can upload to company_profiles"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'company_profiles' AND 
    auth.uid() IS NOT NULL
  );

-- Allow service role to manage all files
CREATE POLICY "Service role can manage company_profiles"
  ON storage.objects FOR ALL
  USING (
    bucket_id = 'company_profiles' AND 
    auth.role() = 'service_role'
  );
