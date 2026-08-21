import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import type { UserRole } from './auth';

/**
 * Server-side role guard utility functions
 * These provide security at the server component and API route level
 */

export async function getCurrentUserRole(): Promise<UserRole | null> {
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single();

  return profile?.role as UserRole || null;
}

export async function requireAuth() {
  const role = await getCurrentUserRole();
  if (!role) {
    redirect('/login');
  }
  return role;
}

export async function requireRole(requiredRole: UserRole) {
  const role = await requireAuth();
  if (role !== requiredRole) {
    // Redirect to appropriate dashboard based on actual role
    const roleRoutes: Record<UserRole, string> = {
      manufacturer: '/dashboard/manufacturer',
      oem: '/dashboard/oem',
      association: '/dashboard/association',
      strategic_partner: '/dashboard/strategic-partner',
      retailer: '/dashboard/retailer',
      student: '/dashboard/student',
    };
    redirect(roleRoutes[role]);
  }
  return role;
}

export async function requireAnyRole(allowedRoles: UserRole[]) {
  const role = await requireAuth();
  if (!allowedRoles.includes(role)) {
    const roleRoutes: Record<UserRole, string> = {
      manufacturer: '/dashboard/manufacturer',
      oem: '/dashboard/oem',
      association: '/dashboard/association',
      strategic_partner: '/dashboard/strategic-partner',
      retailer: '/dashboard/retailer',
      student: '/dashboard/student',
    };
    redirect(roleRoutes[role]);
  }
  return role;
}

export function hasAccess(userRole: UserRole | null, requiredRole: UserRole): boolean {
  return userRole === requiredRole;
}

export function hasAnyAccess(userRole: UserRole | null, allowedRoles: UserRole[]): boolean {
  return userRole !== null && allowedRoles.includes(userRole);
}