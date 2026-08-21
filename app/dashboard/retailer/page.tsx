import { redirect } from 'next/navigation';

export default async function RetailerDashboardPage() {
  // Temporarily disable role check for debugging
  redirect('/dashboard/retailer/overview');
}