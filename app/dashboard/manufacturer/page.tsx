import { redirect } from 'next/navigation';

export default async function ManufacturerDashboardPage() {
  // Temporarily disable role check for debugging
  redirect('/dashboard/manufacturer/active-projects');
}