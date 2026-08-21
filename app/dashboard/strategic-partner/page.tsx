import { redirect } from 'next/navigation';

export default async function StrategicPartnerDashboardPage() {
  // Temporarily disable role check for debugging
  redirect('/dashboard/strategic-partner/overview');
}