"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Users, Briefcase, Settings as SettingsIcon } from "lucide-react";

const sidebarItems = [
  { label: "Dashboard", href: "/dashboard", icon: <Home className="w-4 h-4 mr-2" /> },
  { label: "Clients", href: "/dashboard/clients", icon: <Users className="w-4 h-4 mr-2" /> },
  { label: "Projects", href: "/dashboard/projects", icon: <Briefcase className="w-4 h-4 mr-2" /> },
  { label: "Team", href: "/dashboard/team", icon: <Users className="w-4 h-4 mr-2" /> },
  { label: "Settings", href: "/dashboard/settings", icon: <SettingsIcon className="w-4 h-4 mr-2" /> },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex h-full flex-col gap-2 border-r bg-muted px-6 py-8 min-w-[200px]">
      <span className="mb-8 text-xl font-bold tracking-tight">AgencyFlow</span>
      {sidebarItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={cn(
            "flex items-center rounded px-2 py-2 text-sm font-medium transition hover:bg-primary/10",
            pathname === item.href && "bg-primary text-background"
          )}
        >
          {item.icon}
          {item.label}
        </Link>
      ))}
    </nav>
  );
};