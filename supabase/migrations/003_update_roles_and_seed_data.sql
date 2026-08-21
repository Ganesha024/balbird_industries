-- Migration 003: Update role-specific schemas, set default roles, and seed data

-- Step 1: Update role-specific table schemas to match requirements

-- Update manufacturers table
ALTER TABLE manufacturer_profiles 
  ADD COLUMN IF NOT EXISTS capabilities TEXT,
  ADD COLUMN IF NOT EXISTS capacity TEXT;

-- Update oems table  
ALTER TABLE oem_profiles
  ADD COLUMN IF NOT EXISTS sourcing_needs TEXT;

-- Update associations table
ALTER TABLE association_profiles
  ADD COLUMN IF NOT EXISTS region TEXT;

-- Update strategic_partners table
ALTER TABLE strategic_partner_profiles
  ADD COLUMN IF NOT EXISTS focus_area TEXT;

-- Update retailers table
ALTER TABLE retailer_profiles
  RENAME COLUMN target_market TO product_categories IF EXISTS;
ALTER TABLE retailer_profiles
  ADD COLUMN IF NOT EXISTS region TEXT;

-- Update students table
ALTER TABLE student_profiles
  RENAME COLUMN field_of_study TO course IF EXISTS;
ALTER TABLE student_profiles
  ADD COLUMN IF NOT EXISTS area_of_interest TEXT;

-- Step 2: Set default role for existing users (manufacturer as default)
UPDATE profiles 
SET role = 'manufacturer' 
WHERE role IS NULL OR role = '';

-- Step 3: Seed realistic Pune-belt manufacturing data

-- Manufacturer profiles (Pune-belt companies)
INSERT INTO manufacturer_profiles (profile_id, company_name, capabilities, capacity, certifications, established_year) VALUES
  (gen_random_uuid(), 'Precision Auto Components Ltd', 'CNC Machining, Sheet Metal, Assembly', '5000 units/month', ARRAY['IATF 16949', 'ISO 9001'], 2008),
  (gen_random_uuid(), 'Bharat Electronics Manufacturing', 'PCB Assembly, Testing, Quality Control', '10000 units/month', ARRAY['ISO 9001', 'ISO 14001'], 2012),
  (gen_random_uuid(), 'Pune Engineering Works', 'Heavy Fabrication, Welding, Structural Steel', '2000 tons/month', ARRAY['ISO 9001', 'ASME'], 2005),
  (gen_random_uuid(), 'Sunrise Automotive Parts', 'Die Casting, Surface Treatment, Machining', '8000 components/month', ARRAY['IATF 16949', 'ISO 14001'], 2015);

-- OEM profiles
INSERT INTO oem_profiles (profile_id, company_name, industry_sector, sourcing_needs, annual_volume) VALUES
  (gen_random_uuid(), 'Tata Motors Ltd', 'Automotive', 'Chassis components, Engine parts, Electrical systems', '500M INR'),
  (gen_random_uuid(), 'Mahindra & Mahindra', 'Automotive', 'Transmission components, Body parts, Interiors', '450M INR'),
  (gen_random_uuid(), 'Bajaj Auto Ltd', 'Two-wheelers', 'Frame components, Wheels, Electrical systems', '300M INR'),
  (gen_random_uuid(), 'Kirloskar Electric Company', 'Industrial Equipment', 'Motor components, Control systems, Fabrication', '200M INR');

-- Association profiles
INSERT INTO association_profiles (profile_id, association_name, member_count, region, focus_area) VALUES
  (gen_random_uuid(), 'Pune Chamber of Commerce', 2500, 'Western Maharashtra', 'Manufacturing, Trade, Commerce'),
  (gen_random_uuid(), 'Maharashtra Industrial Association', 1800, 'Maharashtra', 'Industrial Development, Policy Advocacy'),
  (gen_random_uuid(), 'Auto Components Manufacturers Association', 450, 'Pune-Nashik Belt', 'Automotive Components, Supply Chain'),
  (gen_random_uuid(), 'Pune IT & Electronics Manufacturing Association', 320, 'Pune Region', 'Electronics Manufacturing, IT Hardware');

-- Strategic partner profiles
INSERT INTO strategic_partner_profiles (profile_id, organization_name, partnership_type, focus_area, service_areas) VALUES
  (gen_random_uuid(), 'KPMG India', 'Consulting', 'Manufacturing Strategy, Supply Chain Optimization', ARRAY['Strategy', 'Operations', 'Risk Management']),
  (gen_random_uuid(), 'Deloitte Touche Tohmatsu', 'Advisory', 'Quality Assurance, Compliance Management', ARRAY['Quality', 'Compliance', 'Digital Transformation']),
  (gen_random_uuid(), 'Ernst & Young', 'Professional Services', 'Financial Advisory, M&A Support', ARRAY['Finance', 'Tax', 'Transactions']),
  (gen_random_uuid(), 'Boston Consulting Group', 'Strategy Consulting', 'Market Expansion, Digital Manufacturing', ARRAY['Strategy', 'Digital', 'Operations']);

-- Retailer profiles
INSERT INTO retailer_profiles (profile_id, store_name, product_categories, region, location_count) VALUES
  (gen_random_uuid(), 'AutoSpares India', 'Automotive Components, Spare Parts', 'Western India', 45),
  (gen_random_uuid(), 'Industrial Supplies Co', 'Industrial Equipment, Safety Gear', 'Maharashtra', 28),
  (gen_random_uuid(), 'Mobility Parts Hub', 'Two-wheeler Components, Accessories', 'Pune-Nashik Region', 35),
  (gen_random_uuid(), 'Electronics Components Depot', 'Electronic Components, PCB Supplies', 'Pune Region', 22);

-- Student profiles
INSERT INTO student_profiles (profile_id, university_name, course, area_of_interest, graduation_year) VALUES
  (gen_random_uuid(), 'College of Engineering Pune', 'Mechanical Engineering', 'Automotive Manufacturing', 2025),
  (gen_random_uuid(), 'MIT World Peace University', 'Industrial Engineering', 'Supply Chain Management', 2026),
  (gen_random_uuid(), 'Symbiosis Institute of Technology', 'Electronics Engineering', 'EV Manufacturing', 2025),
  (gen_random_uuid(), 'DY Patil College of Engineering', 'Production Engineering', 'Quality Assurance', 2026);
