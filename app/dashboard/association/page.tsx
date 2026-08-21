import { redirect } from 'next/navigation';

export default async function AssociationDashboardPage() {
  // Temporarily disable role check for debugging
  redirect('/dashboard/association/overview');
}