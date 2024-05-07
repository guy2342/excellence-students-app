"use client";
import { User, Settings, File, Home, School } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import ExcellenceLogo from "./logo";
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
    icon: <Home height={32} width={32} />,
  },
  {
    label: "בתי ספר",
    href: "/schools",
    icon: <School height={32} width={32} />,
  },
  {
    label: "רכזים",
    href: "/coordinators",
    icon: <User height={32} width={32} />,
  },
  { label: "מורים", href: "/teachers", icon: <User height={32} width={32} /> },
  {
    label: "תלמידים",
    href: "/students",
    icon: <User height={32} width={32} />,
  },
  { label: "דוחות", href: "/reports", icon: <File height={32} width={32} /> },
  {
    label: "סגירת שנה",
    href: "/year-closing",
    icon: <File height={32} width={32} />,
  },
  {
    label: "הגדרות",
    href: "/settings",
    icon: <Settings height={32} width={32} />,
  },
];

export default function Sidebar({}: SidebarProps) {
  const path = usePathname();
  return (
    <aside className="hidden md:flex flex-col h-full w-72 shadow-md border-l-2-2">
      <div className="text-center py-5 border-b-2 w-[90%] mx-auto">
        <ExcellenceLogo />
      </div>
      <div className="h-full flex flex-col px-4 py-2 justify-start gap-2">
        {sidebarLinks.map((link) => {
          return (
              <Link
              key={link.href}
                href={link.href}
                className={cn("h-10", {
                  "justify-self-end": link.label === "הגדרות",
                })}
              >
                <div
                  className={cn(
                    "flex gap-4 items-center space-x-2 rounded px-2 py-2 text-lg hover:bg-secondary",
                    { "bg-secondary font-bold": link.href === path }
                  )}
                >
                  {link.icon}
                  <div>{link.label}</div>
                </div>
              </Link>
          );
        })}
      </div>
    </aside>
  );
}
