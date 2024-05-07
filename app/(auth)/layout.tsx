import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import '../globals.css'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "מערכת מצויינות",
  description:
    "מצויינות במדעים הינה תוכנית תגבור עבור תלמידים הלומדים מתמטיקה ברמת 4-5 יחידות.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="flex flex-1 flex-row w-screen min-h-screen">
          <main className="flex justify-center items-center w-screen h-screen">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
