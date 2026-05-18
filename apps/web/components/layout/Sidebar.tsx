"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquare,
  Users,
  GitBranch,
  Video,
  CheckSquare,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/chat", icon: MessageSquare, label: "Chat" },
  { href: "/developers", icon: Users, label: "Developers" },
  { href: "/repos", icon: GitBranch, label: "Repositories" },
  { href: "/meetings", icon: Video, label: "Meetings" },
  { href: "/tasks", icon: CheckSquare, label: "Tasks" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 flex-shrink-0 bg-sidebar border-r border-border flex flex-col h-full">
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="text-accent-purple font-semibold">✦</span>
          <span className="font-semibold text-text-primary text-sm">Lucyn</span>
        </div>
        <p className="text-xs text-text-tertiary mt-0.5">AI Product Engineer</p>
      </div>

      <nav className="flex-1 p-2 space-y-0.5 overflow-y-auto">
        {navItems.map(({ href, icon: Icon, label }) => {
          const active = pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-2.5 px-3 py-2 rounded text-sm transition-colors",
                active
                  ? "bg-white text-text-primary shadow-sm font-medium"
                  : "text-text-secondary hover:bg-white hover:text-text-primary"
              )}
            >
              <Icon size={16} className={active ? "text-accent-blue" : "text-text-tertiary"} />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="p-2 border-t border-border">
        <Link
          href="/dashboard/settings"
          className="flex items-center gap-2.5 px-3 py-2 rounded text-sm text-text-secondary hover:bg-white hover:text-text-primary transition-colors"
        >
          <Settings size={16} className="text-text-tertiary" />
          Settings
        </Link>
      </div>
    </aside>
  );
}
