import {
  Bookmark,
  Briefcase,
  Building,
  CreditCard,
  LayoutDashboard,
  LucideIcon,
  Plus,
  Search,
  Settings,
  User,
} from "lucide-react";

export const SESSION_LIFETIME = 30 * 24 * 60 * 60;
export const SESSION_REFRESH_TIME = SESSION_LIFETIME / 2;
export const SALARY_CURRENCY = [
  "USD",
  "EUR",
  "GBP",
  "CAD",
  "AUD",
  "JPY",
  "INR",
  "NPR",
] as const;

export const SALARY_PERIOD = ["hourly", "monthly", "yearly"] as const;

export const JOB_TYPE = ["remote", "hybrid", "on-site"] as const;

export const WORK_TYPE = [
  "full-time",
  "part-time",
  "contract",
  "temporary",
  "freelance",
] as const;

export const JOB_LEVEL = [
  "internship",
  "entry level",
  "junior",
  "mid level",
  "senior level",
  "lead",
  "manager",
  "director",
  "executive",
] as const;

export const MIN_EDUCATION = [
  "none",
  "high school",
  "undergraduate",
  "masters",
  "phd",
] as const;

export interface NavItem {
  name: string;
  href: string;
  icon: LucideIcon;
  exact?: boolean;
  bagde?: number | "dynamic";
}

export const applicantNavItems: NavItem[] = [
  {
    name: "Home",
    href: "/dashboard",
    icon: LayoutDashboard,
    exact: true,
  },
  {
    name: "Find Jobs",
    href: "/dashboard/jobs",
    icon: Search,
  },
  {
    name: "Applied",
    href: "/dashboard/applied",
    icon: Briefcase,
  },
  {
    name: "Saved Jobs",
    href: "/dashboard/saved",
    icon: Bookmark,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export const employersNavItems: NavItem[] = [
  {
    name: "Overview",
    href: "/employer-dashboard",
    icon: LayoutDashboard,
    exact: true,
  },
  {
    name: "Employers Profile",
    href: "/employer-dashboard/profile",
    icon: User,
  },
  {
    name: "Post a Job",
    href: "/employer-dashboard/jobs",
    icon: Plus,
  },
  {
    name: "My Jobs",
    href: "/employer-dashboard/joblist",
    icon: Briefcase,
  },
  {
    name: "Saved Candidate",
    href: "/employer-dashboard/saved",
    icon: Bookmark,
  },
  {
    name: "Plans & Billing",
    href: "/employer-dashboard/billing",
    icon: CreditCard,
  },
  {
    name: "All Companies",
    href: "/employer-dashboard/companies",
    icon: Building,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];
