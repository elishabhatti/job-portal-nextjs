import {
  Bookmark,
  Briefcase,
  Building,
  CreditCard,
  LayoutDashboard,
  Plus,
  Settings,
  User,
} from "lucide-react";

const navigationItems = [
  { name: "Overview", icon: LayoutDashboard, href: base + "/" },
  { name: "Employer Profile", icon: User, href: base + "/" },
  { name: "Post a Job", icon: Plus, href: base + "/" },
  { name: "My Jobs", icon: Briefcase, href: base + "/" },
  { name: "Saved Candidate", icon: Bookmark, href: base + "/" },
  { name: "Plans & Billing", icon: CreditCard, href: base + "/" },
  { name: "All Companies", icon: Building, href: base + "/" },
  { name: "Settings", icon: Settings, href: base + "/settings" },
];

const EmployerSidebar = () => {
  return <div>EmployerSidebar</div>;
};

export default EmployerSidebar;
