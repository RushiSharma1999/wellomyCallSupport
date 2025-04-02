import type React from "react";
import { Sidebar } from "@/components/sidebar";
import { PremiumBanner } from "@/components/premium-banner";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <PremiumBanner />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
