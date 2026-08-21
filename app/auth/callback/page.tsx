"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, Suspense } from "react";
import { supabase } from "@/lib/supabase";
import { getCurrentUser } from "@/lib/auth";

function AuthCallbackContent() {
  const search = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const accessToken = search?.get("access_token") ?? null;
      const refreshToken = search?.get("refresh_token") ?? null;

      if (accessToken && refreshToken) {
        const { error } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });
        if (!error) {
          // Get user role to redirect to correct dashboard
          const user = await getCurrentUser();
          
          const roleRoutes: Record<string, string> = {
            manufacturer: "/dashboard/manufacturer/overview",
            oem: "/dashboard/oem/overview",
            association: "/dashboard/association/overview",
            strategic_partner: "/dashboard/strategic-partner/overview",
            retailer: "/dashboard/retailer/overview",
            student: "/dashboard/student/overview",
          };
          
          const destination = user?.role ? roleRoutes[user.role] : "/dashboard";
          router.replace(destination);
          return;
        }
      }
      // Fallback: if tokens missing or error, go to login
      router.replace("/login?msg=confirm_success");
    })();
  }, [search, router]);

  return <p>Finalizing sign-up...</p>;
}

export default function AuthCallback() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <AuthCallbackContent />
    </Suspense>
  );
}
