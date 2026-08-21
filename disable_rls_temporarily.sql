-- Disable RLS temporarily for testing
-- Run this in your Supabase SQL Editor if the other fix doesn't work

ALTER TABLE public.profiles DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.manufacturer_profiles DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.oem_profiles DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.association_profiles DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.strategic_partner_profiles DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.retailer_profiles DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_profiles DISABLE ROW LEVEL SECURITY;
