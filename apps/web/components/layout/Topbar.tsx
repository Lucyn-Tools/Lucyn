"use client";

import { UserButton } from "@clerk/nextjs";
import { Bell, Search } from "lucide-react";

export function Topbar() {
  return (
    <header className="h-12 border-b border-border bg-background flex items-center px-6 gap-4 flex-shrink-0">
      <div className="flex-1 flex items-center gap-2 max-w-sm">
        <button className="flex items-center gap-2 text-text-tertiary text-sm px-3 py-1.5 rounded border border-border hover:border-text-secondary transition-colors w-full">
          <Search size={14} />
          <span>Search… (⌘K)</span>
        </button>
      </div>

      <div className="flex items-center gap-3 ml-auto">
        <button className="relative p-1.5 rounded hover:bg-surface text-text-secondary transition-colors">
          <Bell size={18} />
        </button>
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </header>
  );
}
