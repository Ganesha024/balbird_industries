-- Fix RLS Policies for Profile Creation
-- Run this in your Supabase SQL Editor to fix the signup flow

-- Drop existing policies
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;

-- Create more permissive policies for profile creation
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id OR auth.uid() IS NULL);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- Allow service role to bypass RLS for profile creation
-- This is needed for the signup flow
CREATE POLICY "Service role can manage profiles"
  ON public.profiles FOR ALL
  USING (auth.role() = 'service_role');

-- Alternative approach: Allow profile creation based on email
CREATE POLICY "Users can insert profile with matching email"
  ON public.profiles FOR INSERT
  WITH CHECK (
    auth.uid() IS NULL OR 
    auth.uid() = id OR
    email IN (
      SELECT email FROM auth.users WHERE id = auth.uid()
    )
  );

-- Drop and recreate role-specific table policies
DROP POLICY IF EXISTS "Users can manage own manufacturer profile" ON public.manufacturer_profiles;
DROP POLICY IF EXISTS "Users can manage own oem profile" ON public.oem_profiles;
DROP POLICY IF EXISTS "Users can manage own association profile" ON public.association_profiles;
DROP POLICY IF EXISTS "Users can manage own strategic partner profile" ON public.strategic_partner_profiles;
DROP POLICY IF EXISTS "Users can manage own retailer profile" ON public.retailer_profiles;
DROP POLICY IF EXISTS "Users can manage own student profile" ON public.student_profiles;

-- Create more permissive policies for role-specific tables
CREATE POLICY "Users can manage own manufacturer profile"
  ON public.manufacturer_profiles FOR ALL
  USING (
    profile_id IN (SELECT id FROM public.profiles WHERE id = auth.uid()) OR
    auth.role() = 'service_role'
  );

CREATE POLICY "Users can manage own oem profile"
  ON public.oem_profiles FOR ALL
  USING (
    profile_id IN (SELECT id FROM public.profiles WHERE id = auth.uid()) OR
    auth.role() = 'service_role'
  );

CREATE POLICY "Users can manage own association profile"
  ON public.association_profiles FOR ALL
  USING (
    profile_id IN (SELECT id FROM public.profiles WHERE id = auth.uid()) OR
    auth.role() = 'service_role'
  );

CREATE POLICY "Users can manage own strategic partner profile"
  ON public.strategic_partner_profiles FOR ALL
  USING (
    profile_id IN (SELECT id FROM public.profiles WHERE id = auth.uid()) OR
    auth.role() = 'service_role'
  );

CREATE POLICY "Users can manage own retailer profile"
  ON public.retailer_profiles FOR ALL
  USING (
    profile_id IN (SELECT id FROM public.profiles WHERE id = auth.uid()) OR
    auth.role() = 'service_role'
  );

CREATE POLICY "Users can manage own student profile"
  ON public.student_profiles FOR ALL
  USING (
    profile_id IN (SELECT id FROM public.profiles WHERE id = auth.uid()) OR
    auth.role() = 'service_role'
  );

-- Grant necessary permissions
GRANT ALL ON public.profiles TO anon, authenticated;
GRANT ALL ON public.manufacturer_profiles TO anon, authenticated;
GRANT ALL ON public.oem_profiles TO anon, authenticated;
GRANT ALL ON public.association_profiles TO anon, authenticated;
GRANT ALL ON public.strategic_partner_profiles TO anon, authenticated;
GRANT ALL ON public.retailer_profiles TO anon, authenticated;
GRANT ALL ON public.student_profiles TO anon, authenticated;
