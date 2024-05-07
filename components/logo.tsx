import { GraduationCap } from "lucide-react";
import React from "react";

interface ExcellenceLogoProps {
  width?: number;
  height?: number;
}

export default function ExcellenceLogo({
  width = 24,
  height = 24,
}: ExcellenceLogoProps) {
  return (
    <div className="flex justify-center items-center space-x-4">
      <GraduationCap width={width} height={height} />
      <p className="text-primary font-bold text-xl">מערכת מצויינות</p>
    </div>
  );
}
