"use client";

import { Button, ButtonLink } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import {
  Search, User, ChevronDown, LogOut, Bell, UserCircle, Home,
} from "lucide-react";
import { useEffect, useState } from "react";
import RoleAwareNav from "@/components/dashboard/RoleAwareNav";
import { getAuthenticatedUser, getCurrentUser, signOut, type UserProfile } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [authChecking, setAuthChecking] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function checkAuthentication() {
      const authenticatedUser = await getAuthenticatedUser();

      if (!authenticatedUser) {
        router.replace("/login?next=/dashboard");
        return;
      }

      setUser(await getCurrentUser());
      setAuthChecking(false);
    }

    checkAuthentication();
  }, [router]);

  const handleSignOut = async () => {
    await signOut();
    router.push('/login');
  };

  if (authChecking) {
    return <div className="min-h-screen bg-card" aria-label="Checking authentication" />;
  }

  return (
    <div className="min-h-screen bg-card flex flex-col">
      {/* Dashboard Top Header (Horizontal) */}
      <header className="sticky top-0 z-40 bg-background border-b border-border shrink-0 shadow-sm">
        <div className="flex items-center justify-between px-4 h-14 gap-4 max-w-7xl mx-auto w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image src="/logo.png" alt="Balbird Industries" width={28} height={28} className="rounded-full" />
            <span className="font-bold text-sm">Balbird Industries</span>
            <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-accent/20 text-accent uppercase tracking-wider ml-1">Beta</span>
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-md mx-auto hidden md:flex items-center gap-2 bg-card rounded-lg px-3 py-1.5 border border-transparent focus-within:border-accent/30 focus-within:ring-2 focus-within:ring-accent/10 transition-all">
            <Search className="h-4 w-4 text-foreground/40" />
            <input
              type="text"
              placeholder="Search projects, documents..."
              className="bg-transparent border-none outline-none text-sm w-full"
            />
          </div>

          {/* Right side Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <ButtonLink href="/dashboard/notifications" variant="ghost" className="relative p-2 hidden sm:flex">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </ButtonLink>

            {/* Profile dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setProfileOpen(!profileOpen)}
              >
                <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center border border-accent/20">
                  <User className="h-4 w-4 text-accent" />
                </div>
                <ChevronDown className="h-3 w-3 hidden sm:block text-foreground/70" />
              </button>

              {profileOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setProfileOpen(false)} />
                  <div className="absolute right-0 mt-2 w-56 bg-background border border-border rounded-xl shadow-lg z-50 overflow-hidden">
                    <div className="p-4 border-b border-border bg-card">
                      <p className="font-bold text-sm text-foreground">{user?.full_name || "Your account"}</p>
                      <p className="text-xs text-foreground/70 mt-0.5">{user?.email || "Loading profile…"}</p>
                    </div>
                    <div className="p-2 space-y-1">
                      <ButtonLink href="/dashboard/profile" variant="ghost" className="w-full justify-start text-sm">
                        <UserCircle className="h-4 w-4 mr-2" /> My Profile
                      </ButtonLink>
                      <ButtonLink href="/" variant="ghost" className="w-full justify-start text-sm">
                        <Home className="h-4 w-4 mr-2" /> Return to Main Site
                      </ButtonLink>
                      <Button variant="ghost" className="w-full justify-start text-sm text-red-600 hover:text-red-700 hover:bg-red-50" onClick={handleSignOut}>
                        <LogOut className="h-4 w-4 mr-2" /> Sign Out
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Secondary Navigation (Horizontal Scrollable Tabs) */}
        <div className="border-t border-border bg-background">
          <div className="max-w-7xl mx-auto w-full px-4 overflow-x-auto custom-scrollbar">
            <RoleAwareNav />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
        {children}
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          height: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 20px;
        }
      `}} />
    </div>
  );
}
