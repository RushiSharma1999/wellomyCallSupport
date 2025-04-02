"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  BookOpen,
  HelpCircle,
  LogOut,
  Megaphone,
  Phone,
  Settings,
  Sparkles,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Update the sidebar structure and labels according to the screenshot
export function Sidebar() {
  const pathname = usePathname();

  // Function to check if a path is active
  const isActive = (path: string) => {
    if (path === "/dashboard" && pathname === "/") return true;
    return pathname === path || pathname?.startsWith(`${path}/`);
  };

  // Function to handle logout
  const handleLogout = () => {
    // In a real app, you would handle logout logic here
    // For now, just redirect to the landing page
    window.location.href = "/landing";
  };

  return (
    <div className="w-64 border-r bg-gray-50 min-h-screen flex flex-col">
      <div className="p-4 border-b">
        <Link href="/dashboard" className="flex items-center">
          <img
            src="/wellomy-logo-small.png"
            alt="Wellomy Logo"
            className="h-8 w-8 bg-green-600 rounded flex items-center justify-center mr-2"
          />
          <span className="font-bold text-xl">WellomyTech</span>
        </Link>
      </div>

      <Link
        href="/dashboard"
        className={`p-4 border-b ${
          isActive("/dashboard") ? "bg-gray-100" : ""
        }`}
      >
        <div
          className={`flex items-center ${
            isActive("/dashboard")
              ? "text-green-800 font-medium"
              : "text-gray-700"
          }`}
        >
          <BarChart3
            className={`h-5 w-5 mr-3 ${
              isActive("/dashboard") ? "text-green-600" : "text-gray-500"
            }`}
          />
          Dashboard
        </div>
      </Link>

      <div className="p-4 border-b">
        <p className="text-xs text-gray-500 mb-4">ADD</p>
        <div className="space-y-4">
          <Link
            href="/knowledge"
            className={`flex items-center ${
              isActive("/knowledge")
                ? "text-green-800 font-medium bg-gray-100 -mx-4 px-4 py-2"
                : "text-gray-700"
            }`}
          >
            <BookOpen
              className={`h-5 w-5 mr-3 ${
                isActive("/knowledge") ? "text-green-600" : "text-gray-500"
              }`}
            />
            Knowledge
          </Link>
          <Link
            href="/calendars"
            className={`flex items-center ${
              isActive("/calendars")
                ? "text-green-800 font-medium bg-gray-100 -mx-4 px-4 py-2"
                : "text-gray-700"
            }`}
          >
            <Calendar
              className={`h-5 w-5 mr-3 ${
                isActive("/calendars") ? "text-green-600" : "text-gray-500"
              }`}
            />
            Calendars
          </Link>
        </div>
      </div>

      <div className="p-4 border-b">
        <p className="text-xs text-gray-500 mb-4">MANAGE</p>
        <div className="space-y-4">
          <Link
            href="/campaigns"
            className={`flex items-center ${
              isActive("/campaigns")
                ? "text-green-800 font-medium bg-gray-100 -mx-4 px-4 py-2"
                : "text-gray-700"
            }`}
          >
            <Megaphone
              className={`h-5 w-5 mr-3 ${
                isActive("/campaigns") ? "text-green-600" : "text-gray-500"
              }`}
            />
            Campaigns
          </Link>
          <Link
            href="/call-records"
            className={`flex items-center ${
              isActive("/call-records")
                ? "text-green-800 font-medium bg-gray-100 -mx-4 px-4 py-2"
                : "text-gray-700"
            }`}
          >
            <Phone
              className={`h-5 w-5 mr-3 ${
                isActive("/call-records") ? "text-green-600" : "text-gray-500"
              }`}
            />
            Call Records
          </Link>
        </div>
      </div>

      <div className="p-4 border-b">
        <p className="text-xs text-gray-500 mb-4">ACCOUNT</p>
        <Link
          href="/account"
          className={`flex items-center ${
            isActive("/account")
              ? "text-green-800 font-medium bg-gray-100 -mx-4 px-4 py-2"
              : "text-gray-700"
          }`}
        >
          <Settings
            className={`h-5 w-5 mr-3 ${
              isActive("/account") ? "text-green-600" : "text-gray-500"
            }`}
          />
          Account
        </Link>
      </div>

      <div className="p-4 mt-auto">
        <Button variant="outline" className="w-full justify-center mb-6">
          <HelpCircle className="h-4 w-4 mr-2" />
          Need help? Book a call
        </Button>

        {/* User Info & Logout */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-gray-400 rounded-full flex items-center justify-center text-white mr-2 overflow-hidden">
              <span className="text-xs">RU</span>
            </div>
            <div className="text-sm">
              <p className="font-medium">rushisharma64</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-500 hover:text-red-600"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
