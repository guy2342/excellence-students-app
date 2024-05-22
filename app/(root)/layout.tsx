import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import { ThemeProvider } from "./theme-provider";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import Footer from "@/components/footer";

import "../globals.css";
import MobileNav from "@/components/mobile-nav";

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
      <html lang="he-IL" dir="rtl">
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="flex w-screen h-screen">
              <Sidebar />
              <MobileNav />
              <div className="flex flex-col flex-1">
                <Header/>
                {children}
                </div>
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
