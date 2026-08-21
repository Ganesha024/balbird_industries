-- Combined database setup script for Balbird Industries
-- Run this in your Supabase SQL Editor

-- ============================================
-- MIGRATION 001: Create profiles table
-- ============================================

-- Create profiles table with role enum
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  role TEXT NOT NULL CHECK (role IN ('manufacturer', 'oem', 'association', 'strategic_partner', 'retailer', 'student')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on role for faster queries
CREATE INDEX IF NOT EXISTS idx_profiles_role ON profiles(role);

-- Trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER IF NOT EXISTS update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- RLS policies
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;

-- Users can read their own profile
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

-- Users can update their own profile
CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Users can insert their own profile (on signup)
CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- ============================================
-- MIGRATION 002: Create role-specific tables
-- ============================================

-- Manufacturer-specific fields
CREATE TABLE IF NOT EXISTS manufacturer_profiles (
  profile_id UUID PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
  company_name TEXT NOT NULL,
  production_capacity TEXT,
  certifications TEXT[],
  established_year INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- OEM-specific fields
CREATE TABLE IF NOT EXISTS oem_profiles (
  profile_id UUID PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
  company_name TEXT NOT NULL,
  industry_sector TEXT,
  annual_volume TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Association-specific fields
CREATE TABLE IF NOT EXISTS association_profiles (
  profile_id UUID PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
  association_name TEXT NOT NULL,
  member_count INTEGER,
  focus_area TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Strategic Partner-specific fields
CREATE TABLE IF NOT EXISTS strategic_partner_profiles (
  profile_id UUID PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
  organization_name TEXT NOT NULL,
  partnership_type TEXT,
  service_areas TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Retailer-specific fields
CREATE TABLE IF NOT EXISTS retailer_profiles (
  profile_id UUID PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
  store_name TEXT NOT NULL,
  location_count INTEGER,
  target_market TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Student-specific fields
CREATE TABLE IF NOT EXISTS student_profiles (
  profile_id UUID PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
  university_name TEXT NOT NULL,
  field_of_study TEXT,
  graduation_year INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create updated_at triggers for all role-specific tables
CREATE TRIGGER IF NOT EXISTS update_manufacturer_profiles_updated_at BEFORE UPDATE ON manufacturer_profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER IF NOT EXISTS update_oem_profiles_updated_at BEFORE UPDATE ON oem_profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER IF NOT EXISTS update_association_profiles_updated_at BEFORE UPDATE ON association_profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER IF NOT EXISTS update_strategic_partner_profiles_updated_at BEFORE UPDATE ON strategic_partner_profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER IF NOT EXISTS update_retailer_profiles_updated_at BEFORE UPDATE ON retailer_profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER IF NOT EXISTS update_student_profiles_updated_at BEFORE UPDATE ON student_profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- RLS policies for all role-specific tables
ALTER TABLE manufacturer_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE oem_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE association_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE strategic_partner_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE retailer_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_profiles ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view own manufacturer profile" ON manufacturer_profiles;
DROP POLICY IF EXISTS "Users can view own oem profile" ON oem_profiles;
DROP POLICY IF EXISTS "Users can view own association profile" ON association_profiles;
DROP POLICY IF EXISTS "Users can view own strategic partner profile" ON strategic_partner_profiles;
DROP POLICY IF EXISTS "Users can view own retailer profile" ON retailer_profiles;
DROP POLICY IF EXISTS "Users can view own student profile" ON student_profiles;

DROP POLICY IF EXISTS "Users can update own manufacturer profile" ON manufacturer_profiles;
DROP POLICY IF EXISTS "Users can update own oem profile" ON oem_profiles;
DROP POLICY IF EXISTS "Users can update own association profile" ON association_profiles;
DROP POLICY IF EXISTS "Users can update own strategic partner profile" ON strategic_partner_profiles;
DROP POLICY IF EXISTS "Users can update own retailer profile" ON retailer_profiles;
DROP POLICY IF EXISTS "Users can update own student profile" ON student_profiles;

DROP POLICY IF EXISTS "Users can insert own manufacturer profile" ON manufacturer_profiles;
DROP POLICY IF EXISTS "Users can insert own oem profile" ON oem_profiles;
DROP POLICY IF EXISTS "Users can insert own association profile" ON association_profiles;
DROP POLICY IF EXISTS "Users can insert own strategic partner profile" ON strategic_partner_profiles;
DROP POLICY IF EXISTS "Users can insert own retailer profile" ON retailer_profiles;
DROP POLICY IF EXISTS "Users can insert own student profile" ON student_profiles;

-- Users can read their own role-specific profile
CREATE POLICY "Users can view own manufacturer profile"
  ON manufacturer_profiles FOR SELECT
  USING (profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

CREATE POLICY "Users can view own oem profile"
  ON oem_profiles FOR SELECT
  USING (profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

CREATE POLICY "Users can view own association profile"
  ON association_profiles FOR SELECT
  USING (profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

CREATE POLICY "Users can view own strategic partner profile"
  ON strategic_partner_profiles FOR SELECT
  USING (profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

CREATE POLICY "Users can view own retailer profile"
  ON retailer_profiles FOR SELECT
  USING (profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

CREATE POLICY "Users can view own student profile"
  ON student_profiles FOR SELECT
  USING (profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

-- Users can update their own role-specific profile
CREATE POLICY "Users can update own manufacturer profile"
  ON manufacturer_profiles FOR UPDATE
  USING (profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

CREATE POLICY "Users can update own oem profile"
  ON oem_profiles FOR UPDATE
  USING (profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

CREATE POLICY "Users can update own association profile"
  ON association_profiles FOR UPDATE
  USING (profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

CREATE POLICY "Users can update own strategic partner profile"
  ON strategic_partner_profiles FOR UPDATE
  USING (profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

CREATE POLICY "Users can update own retailer profile"
  ON retailer_profiles FOR UPDATE
  USING (profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

CREATE POLICY "Users can update own student profile"
  ON student_profiles FOR UPDATE
  USING (profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

-- Users can insert their own role-specific profile
CREATE POLICY "Users can insert own manufacturer profile"
  ON manufacturer_profiles FOR INSERT
  WITH CHECK (profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

CREATE POLICY "Users can insert own oem profile"
  ON oem_profiles FOR INSERT
  WITH CHECK (profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

CREATE POLICY "Users can insert own association profile"
  ON association_profiles FOR INSERT
  WITH CHECK (profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

CREATE POLICY "Users can insert own strategic partner profile"
  ON strategic_partner_profiles FOR INSERT
  WITH CHECK (profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

CREATE POLICY "Users can insert own retailer profile"
  ON retailer_profiles FOR INSERT
  WITH CHECK (profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

CREATE POLICY "Users can insert own student profile"
  ON student_profiles FOR INSERT
  WITH CHECK (profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

-- ============================================
-- SETUP YOUR USER PROFILE
-- ============================================

-- Check your existing user
SELECT id, email FROM auth.users WHERE email = 'your-email@example.com';

-- Create your profile (replace with your actual details)
-- First, get your user ID from the query above, then run:
INSERT INTO profiles (id, email, full_name, role)
VALUES (
  'your-user-id-here',  -- Replace with UUID from above
  'your-email@example.com',
  'Your Full Name',
  'manufacturer'
);

-- Verify the profile was created
SELECT * FROM profiles WHERE email = 'your-email@example.com';