"use client";

import { useState, useEffect } from "react";
import { logoutUserAction } from "../../auth/server/auth.action";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Briefcase,
  Bookmark,
  Settings,
  LogOut,
  Search,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const base = "/dashboard";

const navigationItems = [
  { name: "Home", icon: LayoutDashboard, href: base },
  { name: "Find Jobs", icon: Search, href: base + "/profile" },
  { name: "Applied", icon: Briefcase, href: base + "/jobs" },
  { name: "Saved Jobs", icon: Bookmark, href: base + "/joblist" },
  { name: "Settings", icon: Settings, href: base + "/settings" },
];

const ApplicantSidebar = () => {
  const pathname = usePathname();

  // Prevent hydration mismatch — read path only on client
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  // FIX: Correct active tab logic
  function isActive(href: string | undefined) {
    if (!href) return false;

    const cleanHref = href.replace(/\/$/, "");
    const cleanPath = activePath.replace(/\/$/, "");

    // SPECIAL CASE: Overview
    if (cleanHref === "/employer-dashboard") {
      return cleanPath === "/employer-dashboard";
    }

    // Other routes
    return cleanPath.startsWith(cleanHref);
  }

  return (
    <div className="w-64 bg-card border-r border-border fixed bottom-0 top-0">
      <div className="p-6">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          Employers Dashboard
        </h2>
      </div>

      <nav className="px-3 space-y-1">
        {navigationItems.map((curNav) => {
          const Icon = curNav.icon;

          return (
            <Link
              key={curNav.name}
              href={curNav.href || "#"}
              className={cn(
                "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                isActive(curNav.href) && "text-primary bg-blue-300",
              )}
            >
              <Icon />
              {curNav.name}
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-6 left-3 right-3">
        <button
          onClick={logoutUserAction}
          className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors w-full"
        >
          <LogOut className="h-4 w-4" />
          Log-out
        </button>
      </div>
    </div>
  );
};

export default ApplicantSidebar;
