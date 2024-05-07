import { SearchIcon } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";

export default function Search() {
  return (
    <div className="relative flex max-w-xl w-72 mx-auto">
      <Input
        type="text"
        placeholder="Search..."
        className="py-2 px-4 pl-10"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <SearchIcon className="text-typographyColor w-5 h-5" />
      </div>
    </div>
  );
}
