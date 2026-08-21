import { redirect } from 'next/navigation';

export default async function OEMDashboardPage() {
  // Temporarily disable role check for debugging
  redirect('/dashboard/oem/active-requirements');
}