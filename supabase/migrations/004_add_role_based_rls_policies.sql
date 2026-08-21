-- Migration 004: Add role-based RLS policies for enhanced security

-- Drop existing policies that don't check role
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;

-- Create enhanced role-based policies for profiles table
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (
    auth.uid() = id AND 
    -- Prevent role changes through updates
    role = (SELECT role FROM profiles WHERE id = auth.uid())
  );

CREATE POLICY "Users can insert own profile on signup"
  ON profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Add policy to prevent unauthorized role changes
CREATE POLICY "Prevent role changes"
  ON profiles FOR UPDATE
  USING (
    role = (SELECT role FROM profiles WHERE id = auth.uid())
  );

-- Add function to check if user has specific role
CREATE OR REPLACE FUNCTION user_has_role(required_role TEXT)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM profiles 
    WHERE id = auth.uid() AND role = required_role
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create role-specific data access policies for manufacturer data
-- These policies ensure manufacturers can only access their own data
DROP POLICY IF EXISTS "Users can view own manufacturer profile" ON manufacturer_profiles;
DROP POLICY IF EXISTS "Users can update own manufacturer profile" ON manufacturer_profiles;
DROP POLICY IF EXISTS "Users can insert own manufacturer profile" ON manufacturer_profiles;

CREATE POLICY "Manufacturers can view own profile"
  ON manufacturer_profiles FOR SELECT
  USING (user_has_role('manufacturer') AND profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

CREATE POLICY "Manufacturers can update own profile"
  ON manufacturer_profiles FOR UPDATE
  USING (user_has_role('manufacturer') AND profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

CREATE POLICY "Manufacturers can insert own profile"
  ON manufacturer_profiles FOR INSERT
  WITH CHECK (user_has_role('manufacturer') AND profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

-- Similar policies for OEM profiles
DROP POLICY IF EXISTS "Users can view own oem profile" ON oem_profiles;
DROP POLICY IF EXISTS "Users can update own oem profile" ON oem_profiles;
DROP POLICY IF EXISTS "Users can insert own oem profile" ON oem_profiles;

CREATE POLICY "OEMs can view own profile"
  ON oem_profiles FOR SELECT
  USING (user_has_role('oem') AND profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

CREATE POLICY "OEMs can update own profile"
  ON oem_profiles FOR UPDATE
  USING (user_has_role('oem') AND profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

CREATE POLICY "OEMs can insert own profile"
  ON oem_profiles FOR INSERT
  WITH CHECK (user_has_role('oem') AND profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

-- Similar policies for association profiles
DROP POLICY IF EXISTS "Users can view own association profile" ON association_profiles;
DROP POLICY IF EXISTS "Users can update own association profile" ON association_profiles;
DROP POLICY IF EXISTS "Users can insert own association profile" ON association_profiles;

CREATE POLICY "Associations can view own profile"
  ON association_profiles FOR SELECT
  USING (user_has_role('association') AND profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

CREATE POLICY "Associations can update own profile"
  ON association_profiles FOR UPDATE
  USING (user_has_role('association') AND profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

CREATE POLICY "Associations can insert own profile"
  ON association_profiles FOR INSERT
  WITH CHECK (user_has_role('association') AND profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

-- Similar policies for strategic partner profiles
DROP POLICY IF EXISTS "Users can view own strategic partner profile" ON strategic_partner_profiles;
DROP POLICY IF EXISTS "Users can update own strategic partner profile" ON strategic_partner_profiles;
DROP POLICY IF EXISTS "Users can insert own strategic partner profile" ON strategic_partner_profiles;

CREATE POLICY "Strategic partners can view own profile"
  ON strategic_partner_profiles FOR SELECT
  USING (user_has_role('strategic_partner') AND profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

CREATE POLICY "Strategic partners can update own profile"
  ON strategic_partner_profiles FOR UPDATE
  USING (user_has_role('strategic_partner') AND profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

CREATE POLICY "Strategic partners can insert own profile"
  ON strategic_partner_profiles FOR INSERT
  WITH CHECK (user_has_role('strategic_partner') AND profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

-- Similar policies for retailer profiles
DROP POLICY IF EXISTS "Users can view own retailer profile" ON retailer_profiles;
DROP POLICY IF EXISTS "Users can update own retailer profile" ON retailer_profiles;
DROP POLICY IF EXISTS "Users can insert own retailer profile" ON retailer_profiles;

CREATE POLICY "Retailers can view own profile"
  ON retailer_profiles FOR SELECT
  USING (user_has_role('retailer') AND profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

CREATE POLICY "Retailers can update own profile"
  ON retailer_profiles FOR UPDATE
  USING (user_has_role('retailer') AND profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

CREATE POLICY "Retailers can insert own profile"
  ON retailer_profiles FOR INSERT
  WITH CHECK (user_has_role('retailer') AND profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

-- Similar policies for student profiles
DROP POLICY IF EXISTS "Users can view own student profile" ON student_profiles;
DROP POLICY IF EXISTS "Users can update own student profile" ON student_profiles;
DROP POLICY IF EXISTS "Users can insert own student profile" ON student_profiles;

CREATE POLICY "Students can view own profile"
  ON student_profiles FOR SELECT
  USING (user_has_role('student') AND profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

CREATE POLICY "Students can update own profile"
  ON student_profiles FOR UPDATE
  USING (user_has_role('student') AND profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

CREATE POLICY "Students can insert own profile"
  ON student_profiles FOR INSERT
  WITH CHECK (user_has_role('student') AND profile_id IN (SELECT id FROM profiles WHERE auth.uid() = id));

-- Add a security function to get current user's role
CREATE OR REPLACE FUNCTION get_current_user_role()
RETURNS TEXT AS $$
BEGIN
  RETURN (
    SELECT role FROM profiles 
    WHERE id = auth.uid()
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permissions to authenticated users
GRANT EXECUTE ON FUNCTION user_has_role(TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION get_current_user_role() TO authenticated;