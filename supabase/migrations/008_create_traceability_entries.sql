-- Migration 008: Create traceability_entries table
-- This table stores traceability entries with image uploads for manufacturers

CREATE TABLE IF NOT EXISTS traceability_entries (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  batch_number TEXT NOT NULL,
  product_name TEXT NOT NULL,
  client_name TEXT,
  description TEXT,
  image_url TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed', 'at_risk')),
  progress INTEGER DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_traceability_user_id ON traceability_entries(user_id);
CREATE INDEX IF NOT EXISTS idx_traceability_status ON traceability_entries(status);
CREATE INDEX IF NOT EXISTS idx_traceability_batch ON traceability_entries(batch_number);

-- Create updated_at trigger
DROP TRIGGER IF EXISTS update_traceability_entries_updated_at ON traceability_entries;
CREATE TRIGGER update_traceability_entries_updated_at 
  BEFORE UPDATE ON traceability_entries
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable RLS
ALTER TABLE traceability_entries ENABLE ROW LEVEL SECURITY;

-- Users can read their own traceability entries
DROP POLICY IF EXISTS "Users can view own traceability entries" ON traceability_entries;
CREATE POLICY "Users can view own traceability entries"
  ON traceability_entries FOR SELECT
  USING (auth.uid() = user_id);

-- Users can insert their own traceability entries
DROP POLICY IF EXISTS "Users can insert own traceability entries" ON traceability_entries;
CREATE POLICY "Users can insert own traceability entries"
  ON traceability_entries FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own traceability entries
DROP POLICY IF EXISTS "Users can update own traceability entries" ON traceability_entries;
CREATE POLICY "Users can update own traceability entries"
  ON traceability_entries FOR UPDATE
  USING (auth.uid() = user_id);

-- Users can delete their own traceability entries
DROP POLICY IF EXISTS "Users can delete own traceability entries" ON traceability_entries;
CREATE POLICY "Users can delete own traceability entries"
  ON traceability_entries FOR DELETE
  USING (auth.uid() = user_id);

-- Grant necessary permissions
GRANT ALL ON traceability_entries TO authenticated;
GRANT ALL ON traceability_entries TO anon;
