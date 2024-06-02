"use client";
import { User, Settings, File, Home, School } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface SidebarProps {}

type SidebarLinkItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const sidebarLinks: SidebarLinkItem[] = [
  {
    label: "ראשי",
    href: "/",
    icon: <Home height={20} width={20} />,
  },
  {
    label: "רכזים",
    href: "/coordinators",
    icon: <User height={20} width={20} />,
  },
  { label: "מורים", href: "/teachers", icon: <User height={20} width={20} /> },
  {
    label: "תלמידים",
    href: "/students",
    icon: <User height={20} width={20} />,
  },
  { label: "דוחות", href: "/reports", icon: <File height={20} width={20} /> },
  {
    label: "סגירת שנה",
    href: "/year-closing",
    icon: <File height={20} width={20} />,
  },
];

export default function Sidebar({}: SidebarProps) {
  const path = usePathname();
  return (
    <aside className="hidden md:flex flex-col h-full w-72 shadow-md border-l">
      <div className="h-full flex flex-col px-4 py-2 justify-start gap-2">
        {sidebarLinks.map((link) => {
          return (
            <Link key={link.href} href={link.href}>
              <div
                className={cn(
                  "flex gap-4 items-center space-x-2 rounded px-2 py-2 text-lg text-slate-500 hover:bg-slate-200",

                  { "bg-slate-300 text-slate-900": link.href === path }
                )}
              >
                <div className="flex justify-center items-center gap-2">
                  {link.icon}
                  {link.label}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
