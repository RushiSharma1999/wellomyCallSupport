"use client";

import Link from "next/link";
import {
  BarChart3,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Contact2,
  Sparkles,
  User,
  Zap,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">
        Welcome back to your WellomyTech Dashboard
      </h1>

      {/* Tabs */}
      <div className="mb-8">
        <Tabs defaultValue="deployment" className="w-full">
          <TabsList className="border-b w-full justify-start rounded-none h-auto p-0">
            <TabsTrigger
              value="deployment"
              className="rounded-none px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-green-600 data-[state=active]:text-green-600 data-[state=inactive]:text-gray-500 data-[state=inactive]:border-b-0"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Deployment Dashboard
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Top Deployments Section */}
      <div className="mb-8 relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm text-gray-500">TOP DEPLOYMENTS</h2>
          <div className="flex space-x-2">
            <button
              className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hidden md:flex items-center justify-center"
              aria-label="Scroll left"
              onClick={() => {
                const container = document.getElementById(
                  "deployments-container"
                );
                if (container) {
                  container.scrollBy({ left: -300, behavior: "smooth" });
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hidden md:flex items-center justify-center"
              aria-label="Scroll right"
              onClick={() => {
                const container = document.getElementById(
                  "deployments-container"
                );
                if (container) {
                  container.scrollBy({ left: 300, behavior: "smooth" });
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="deployments-container"
          className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide snap-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Test Campaign Card */}
          <Card className="border border-gray-200 p-6 min-w-[300px] md:min-w-[350px] flex-shrink-0 snap-start">
            <div className="flex items-start">
              <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <svg
                  className="h-6 w-6 text-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                />
                <path
                  d="M21 3L15 9M15 9V4M15 9H20M3 15L9 9M9 9H4M9 9V4M3 9L9 15M9 15H4M9 15V20M15 15L21 21M15 15H20M15 15V20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium">Test Campaign</h3>
                <p className="text-gray-500">3 Interactions | 100% Rate</p>
                <Link
                  href="/campaigns/test"
                  className="text-green-600 text-sm hover:underline mt-2 inline-block"
                >
                  Go to Campaign
                </Link>
              </div>
            </div>
          </Card>

          {/* Dad Campaign Card */}
          <Card className="border border-gray-200 p-6 min-w-[300px] md:min-w-[350px] flex-shrink-0 snap-start">
            <div className="flex items-start">
              <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg
                  className="h-6 w-6 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h-5m5 0h2m-7 0v-5a1 1 0 00-1-1h-2a1 1 0 00-1 1v5m4 0h-4m4 0h2m-6 0H3m4 0h2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium">Cafe</h3>
                <p className="text-gray-500">8 Interactions | 85% Rate</p>
                <Link
                  href="/campaigns/dad"
                  className="text-green-600 text-sm hover:underline mt-2 inline-block"
                >
                  Go to Campaign
                </Link>
              </div>
            </div>
          </Card>

          {/* Customer Support Card */}
          <Card className="border border-gray-200 p-6 min-w-[300px] md:min-w-[350px] flex-shrink-0 snap-start">
            <div className="flex items-start">
              <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <svg
                  className="h-6 w-6 text-purple-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13 21v-2a4 4 0 00-8 0v2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium">Customer Support</h3>
                <p className="text-gray-500">12 Interactions | 92% Rate</p>
                <Link
                  href="/campaigns/support"
                  className="text-green-600 text-sm hover:underline mt-2 inline-block"
                >
                  Go to Campaign
                </Link>
              </div>
            </div>
          </Card>

          {/* Sales Outreach Card */}
          <Card className="border border-gray-200 p-6 min-w-[300px] md:min-w-[350px] flex-shrink-0 snap-start">
            <div className="flex items-start">
              <div className="h-10 w-10 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                <svg
                  className="h-6 w-6 text-yellow-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium">Sales Outreach</h3>
                <p className="text-gray-500">5 Interactions | 78% Rate</p>
                <Link
                  href="/campaigns/sales"
                  className="text-green-600 text-sm hover:underline mt-2 inline-block"
                >
                  Go to Campaign
                </Link>
              </div>
            </div>
          </Card>
        </div>

        {/* Scroll indicators */}
        <div className="flex justify-center mt-2 md:hidden">
          <div className="flex space-x-1">
            <div className="h-1 w-6 bg-green-600 rounded-full"></div>
            <div className="h-1 w-2 bg-gray-300 rounded-full"></div>
            <div className="h-1 w-2 bg-gray-300 rounded-full"></div>
            <div className="h-1 w-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Deployment Stats Section */}
      <div className="mb-8">
        <h2 className="text-sm text-gray-500 mb-4">DEPLOYMENT STATS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Calls Made | Calls Received */}
          <Card className="border border-gray-200 p-6">
            <div className="flex items-center mb-2">
              <BarChart3 className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-gray-600">Calls Made | Calls Received</span>
            </div>
            <div className="flex items-end">
              <div>
                <span className="text-4xl font-bold mr-2">0</span>
                <div className="flex items-center text-red-500 text-sm">
                  <ChevronDown className="h-4 w-4" />
                  <span>100%</span>
                </div>
              </div>
              <span className="text-4xl font-bold mx-2">|</span>
              <div>
                <span className="text-4xl font-bold mr-2">3</span>
                <div className="flex items-center text-green-500 text-sm">
                  <ChevronUp className="h-4 w-4" />
                  <span>100%</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Connection Rate */}
          <Card className="border border-gray-200 p-6">
            <div className="flex items-center mb-2">
              <BarChart3 className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-gray-600">Connection Rate</span>
            </div>
            <div className="flex items-end">
              <span className="text-4xl font-bold mr-2">0%</span>
              <div className="flex items-center text-red-500 text-sm">
                <ChevronDown className="h-4 w-4" />
                <span>100%</span>
              </div>
            </div>
          </Card>

          {/* Total Talk Time */}
          <Card className="border border-gray-200 p-6">
            <div className="flex items-center mb-2">
              <BarChart3 className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-gray-600">Total Talk Time</span>
            </div>
            <div className="flex items-end">
              <span className="text-4xl font-bold mr-2">00:06:22</span>
              <div className="flex items-center text-red-500 text-sm">
                <ChevronDown className="h-4 w-4" />
                <span>100%</span>
              </div>
            </div>
          </Card>

          {/* Bookings Made */}
          <Card className="border border-gray-200 p-6">
            <div className="flex items-center mb-2">
              <BarChart3 className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-gray-600">Bookings Made</span>
            </div>
            <div className="flex items-end">
              <span className="text-4xl font-bold mr-2">0</span>
            </div>
          </Card>

          {/* Transfers Made */}
          <Card className="border border-gray-200 p-6">
            <div className="flex items-center mb-2">
              <BarChart3 className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-gray-600">Transfers Made</span>
            </div>
            <div className="flex items-end">
              <span className="text-4xl font-bold mr-2">0</span>
              <div className="flex items-center text-red-500 text-sm">
                <ChevronDown className="h-4 w-4" />
                <span>100%</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Elements Section */}
      <div>
        <h2 className="text-sm text-gray-500 mb-4">YOUR ELEMENTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Agents */}
          {/* <Link href="/agents">
            <Card className="border border-gray-200 hover:border-green-200 hover:shadow-md transition-all">
              <div className="flex">
                <div className="bg-pink-500 p-4 flex items-center justify-center rounded-l-lg">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Agents</h3>
                  <p className="text-gray-600">1 Agents</p>
                </div>
              </div>
            </Card>
          </Link> */}

          {/* Campaigns */}
          <Link href="/campaigns">
            <Card className="border border-gray-200 hover:border-green-200 hover:shadow-md transition-all">
              <div className="flex">
                <div className="bg-yellow-500 p-4 flex items-center justify-center rounded-l-lg">
                  <Contact2 className="h-6 w-6 text-white" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Campaigns</h3>
                  <p className="text-gray-600">4 Campaigns</p>
                </div>
              </div>
            </Card>
          </Link>

          {/* Knowledge */}
          <Link href="/knowledge">
            <Card className="border border-gray-200 hover:border-green-200 hover:shadow-md transition-all">
              <div className="flex">
                <div className="bg-blue-500 p-4 flex items-center justify-center rounded-l-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Knowledge</h3>
                  <p className="text-gray-600">4 Knowledge</p>
                </div>
              </div>
            </Card>
          </Link>

          {/* Calendars */}
          <Link href="/calendars">
            <Card className="border border-gray-200 hover:border-green-200 hover:shadow-md transition-all">
              <div className="flex">
                <div className="bg-orange-500 p-4 flex items-center justify-center rounded-l-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Calendars</h3>
                  <p className="text-gray-600">0 Calendars</p>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
