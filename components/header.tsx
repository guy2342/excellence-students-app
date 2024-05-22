import React from "react";
import ExcellenceLogo from "./logo";
import { ModeToggle } from "./themeToggle";
import { UserButton } from "@clerk/nextjs";
import Search from "./search";

export default function Header() {
  return (
    <div className="flex items-center w-full h-20 shadow-sm">
      <Search />
      <div className="flex flex-row space-x-4 px-12 gap-4">
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  );
}
