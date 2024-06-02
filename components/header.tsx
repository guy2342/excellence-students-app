import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

import Search from "./search";
import { ModeToggle } from "./theme-toggle";
import { Brain } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between items-center space-x-4 w-full h-20 shadow-sm">
      <div className="flex gap-2 px-4">
        <h1>מערכת מצויינות</h1>
        <Brain />
      </div>
      <Search />
      <div className="flex flex-row gap-4">
        <ModeToggle />
      </div>
    </div>
  );
}
