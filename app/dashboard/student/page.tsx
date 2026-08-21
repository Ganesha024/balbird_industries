import { redirect } from 'next/navigation';

export default async function StudentDashboardPage() {
  // Temporarily disable role check for debugging
  redirect('/dashboard/student/overview');
}