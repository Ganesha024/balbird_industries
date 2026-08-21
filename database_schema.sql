-- Database Schema for Balbird Application
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Main profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  role TEXT NOT NULL CHECK (role IN ('manufacturer', 'oem', 'association', 'strategic_partner', 'retailer', 'student')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc'::text, NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Role-specific profile tables

-- Manufacturer profiles
CREATE TABLE IF NOT EXISTS public.manufacturer_profiles (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  company_name TEXT,
  location TEXT,
  capabilities TEXT[],
  certifications TEXT[],
  established_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE TRIGGER set_updated_at_manufacturer
  BEFORE UPDATE ON public.manufacturer_profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- OEM profiles
CREATE TABLE IF NOT EXISTS public.oem_profiles (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  company_name TEXT,
  industry_sector TEXT,
  requirements TEXT[],
  quality_standards TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE TRIGGER set_updated_at_oem
  BEFORE UPDATE ON public.oem_profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Association profiles
CREATE TABLE IF NOT EXISTS public.association_profiles (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  association_name TEXT,
  focus_area TEXT,
  member_count INTEGER,
  region TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE TRIGGER set_updated_at_association
  BEFORE UPDATE ON public.association_profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Strategic partner profiles
CREATE TABLE IF NOT EXISTS public.strategic_partner_profiles (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  company_name TEXT,
  partnership_type TEXT,
  focus_areas TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE TRIGGER set_updated_at_strategic_partner
  BEFORE UPDATE ON public.strategic_partner_profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Retailer profiles
CREATE TABLE IF NOT EXISTS public.retailer_profiles (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  store_name TEXT,
  location TEXT,
  product_categories TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE TRIGGER set_updated_at_retailer
  BEFORE UPDATE ON public.retailer_profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Student profiles
CREATE TABLE IF NOT EXISTS public.student_profiles (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  institution TEXT,
  field_of_study TEXT,
  education_level TEXT,
  graduation_year INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE TRIGGER set_updated_at_student
  BEFORE UPDATE ON public.student_profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Row Level Security (RLS) policies
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Allow users to read their own profile
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

-- Allow users to insert their own profile
CREATE POLICY "Users can insert own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Allow users to update their own profile
CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- Enable RLS for role-specific tables
ALTER TABLE public.manufacturer_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.oem_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.association_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.strategic_partner_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.retailer_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_profiles ENABLE ROW LEVEL SECURITY;

-- Allow users to manage their role-specific profiles
CREATE POLICY "Users can manage own manufacturer profile"
  ON public.manufacturer_profiles FOR ALL
  USING (profile_id IN (SELECT id FROM public.profiles WHERE id = auth.uid()));

CREATE POLICY "Users can manage own oem profile"
  ON public.oem_profiles FOR ALL
  USING (profile_id IN (SELECT id FROM public.profiles WHERE id = auth.uid()));

CREATE POLICY "Users can manage own association profile"
  ON public.association_profiles FOR ALL
  USING (profile_id IN (SELECT id FROM public.profiles WHERE id = auth.uid()));

CREATE POLICY "Users can manage own strategic partner profile"
  ON public.strategic_partner_profiles FOR ALL
  USING (profile_id IN (SELECT id FROM public.profiles WHERE id = auth.uid()));

CREATE POLICY "Users can manage own retailer profile"
  ON public.retailer_profiles FOR ALL
  USING (profile_id IN (SELECT id FROM public.profiles WHERE id = auth.uid()));

CREATE POLICY "Users can manage own student profile"
  ON public.student_profiles FOR ALL
  USING (profile_id IN (SELECT id FROM public.profiles WHERE id = auth.uid()));

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON public.profiles TO authenticated;
GRANT ALL ON public.manufacturer_profiles TO authenticated;
GRANT ALL ON public.oem_profiles TO authenticated;
GRANT ALL ON public.association_profiles TO authenticated;
GRANT ALL ON public.strategic_partner_profiles TO authenticated;
GRANT ALL ON public.retailer_profiles TO authenticated;
GRANT ALL ON public.student_profiles TO authenticated;
