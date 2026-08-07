import { supabase } from './supabase';
import type { User } from '@supabase/supabase-js';

export type UserRole = 'manufacturer' | 'oem' | 'association' | 'strategic_partner' | 'retailer' | 'student';

export const roleLabels: Record<UserRole, string> = {
  manufacturer: 'Manufacturer',
  oem: 'OEM',
  association: 'Association',
  strategic_partner: 'Strategic Partner',
  retailer: 'Retailer',
  student: 'Student',
};

const roleProfileTables: Record<UserRole, string> = {
  manufacturer: 'manufacturer_profiles',
  oem: 'oem_profiles',
  association: 'association_profiles',
  strategic_partner: 'strategic_partner_profiles',
  retailer: 'retailer_profiles',
  student: 'student_profiles',
};

export interface UserProfile {
  id: string;
  email: string;
  full_name: string | null;
  role: UserRole;
  created_at: string;
  updated_at: string;
}

export async function signIn(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Sign in error:', error);
      return { success: false, error: error.message, claims: null };
    }

    // Attempt to get the access token from the immediate response
    let claims = data?.session?.access_token || null;
    // If not available, fetch the current session explicitly
    if (!claims) {
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
      if (!sessionError && sessionData?.session) {
        claims = sessionData.session.access_token;
      }
    }
    return { success: true, data, claims };
  } catch (err) {
    console.error('Sign in exception:', err);
    return { success: false, error: 'An unexpected error occurred', claims: null };
  }
}
export async function signUp(email: string, password: string, fullName: string, role: UserRole) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return { success: false, error: error.message };
  }

  if (data.user) {
    // Create profile entry
    const { error: profileError } = await supabase
      .from('profiles')
      .insert({
        id: data.user.id,
        email: data.user.email,
        full_name: fullName,
        role,
      });

    if (profileError) {
      return { success: false, error: profileError.message };
    }
  }

  return { success: true, data };
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    return { success: false, error: error.message };
  }
  return { success: true };
}

export async function getCurrentUser(): Promise<UserProfile | null> {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return null;
  }

  const { data: profile, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (error || !profile) {
    return null;
  }

  return profile as UserProfile;
}

/**
 * Checks the Supabase Auth session only. Unlike getCurrentUser, this does not
 * require a matching application profile row to exist.
 */
export async function getAuthenticatedUser(): Promise<User | null> {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export async function getUserRole(): Promise<UserRole | null> {
  const profile = await getCurrentUser();
  return profile?.role || null;
}

export async function getRoleSpecificProfile(role: UserRole, profileId: string) {
  const { data, error } = await supabase
    .from(roleProfileTables[role])
    .select('*')
    .eq('profile_id', profileId)
    .maybeSingle();

  if (error) {
    console.error('Role profile lookup error:', error);
    return null;
  }

  return data as Record<string, unknown> | null;
}
