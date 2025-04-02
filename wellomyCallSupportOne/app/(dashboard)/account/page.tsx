"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Check, CreditCard, Settings, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Card } from "@/components/ui/card"

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("settings")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [profileImage, setProfileImage] = useState<string | null>(null)

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === "string") {
          setProfileImage(event.target.result)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleChangeClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        {/* Main Content */}
        <div className="flex-1 p-8">
          <h1 className="text-2xl font-bold mb-8">Account Settings</h1>

          {/* Tabs */}
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
            <TabsList className="border-b w-full justify-start rounded-none h-auto p-0">
              <TabsTrigger
                value="settings"
                className={`rounded-none px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-green-600 data-[state=active]:text-green-600 data-[state=inactive]:text-gray-500 data-[state=inactive]:border-b-0`}
              >
                <Settings className="h-4 w-4 mr-2" />
                Account Settings
              </TabsTrigger>
              <TabsTrigger
                value="billing"
                className={`rounded-none px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-green-600 data-[state=active]:text-green-600 data-[state=inactive]:text-gray-500 data-[state=inactive]:border-b-0`}
              >
                <CreditCard className="h-4 w-4 mr-2" />
                Account Billing
              </TabsTrigger>
            </TabsList>

            {/* Account Settings Content */}
            <TabsContent value="settings" className="pt-6">
              <div className="max-w-3xl">
                <div className="mb-8">
                  <h2 className="text-lg font-medium mb-2">Company & Admin</h2>
                  <p className="text-gray-500 mb-6">Add your company details here.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company Name</label>
                      <Input type="text" defaultValue="Sample" className="w-full" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Admin Name</label>
                      <Input type="text" defaultValue="Rushi Sharma" className="w-full" />
                    </div>
                  </div>

                  <div className="flex items-center mb-8">
                    <div className="h-12 w-12 bg-gray-400 rounded-full flex items-center justify-center text-white mr-3 overflow-hidden">
                      {profileImage ? (
                        <img
                          src={profileImage || "/placeholder.svg"}
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        "RU"
                      )}
                    </div>
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      accept="image/*"
                      onChange={handleProfilePictureChange}
                    />
                    <Button variant="outline" size="sm" onClick={handleChangeClick}>
                      Change
                    </Button>
                    {profileImage && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="ml-2 text-red-500"
                        onClick={() => setProfileImage(null)}
                      >
                        Remove
                      </Button>
                    )}
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-lg font-medium mb-6">Change Password</h2>
                  {/* Password fields would go here */}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <Button variant="outline">Discard Changes</Button>
                    <Button className="bg-green-600 hover:bg-green-700 text-white">Save Changes</Button>
                  </div>
                  <Button variant="ghost" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                    Delete Account & End Subscription
                    <X className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Account Billing Content */}
            <TabsContent value="billing" className="pt-6">
              <div>
                <div className="mb-8">
                  <h2 className="text-lg font-medium mb-4">Manage your plan</h2>
                  <div className="max-w-md">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Remaining Call Time</span>
                      <span className="text-sm font-medium">23 mins / 30 mins</span>
                    </div>
                    <Progress value={76} className="h-2 bg-gray-200" indicatorClassName="bg-green-600" />
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-lg font-medium mb-2">Your Plan</h2>
                  <p className="text-gray-500 mb-6">Choose the plan that best fits your needs.</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Growth Plan */}
                    <Card className="border border-gray-200 overflow-hidden">
                      <div className="p-6 border-b">
                        <h3 className="font-medium mb-2">Growth</h3>
                        <p className="text-sm text-gray-500 mb-4">What's included:</p>
                        <div className="text-3xl font-bold">
                          $399<span className="text-sm font-normal text-gray-500">/mo</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="font-medium mb-4">Key Features:</p>
                        <ul className="space-y-3 mb-6">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>Unlimited Voice Bubbles</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>30 hrs/mo talk time</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>$0.21/min overage</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>Estimated payroll value $3500</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>Email support only</span>
                          </li>
                        </ul>
                        <Button className="w-full">Switch to this Plan</Button>
                      </div>
                    </Card>

                    {/* Elite Plan */}
                    <Card className="border border-gray-200 overflow-hidden">
                      <div className="p-6 border-b">
                        <h3 className="font-medium mb-2">Elite</h3>
                        <p className="text-sm text-gray-500 mb-4">What's included:</p>
                        <div className="text-3xl font-bold">
                          $1000<span className="text-sm font-normal text-gray-500">/mo</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="font-medium mb-4">Key Features:</p>
                        <ul className="space-y-3 mb-6">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>High call volume</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>85 hrs/mo talk time</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>$0.19/min overage</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>Estimated payroll value $12000</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>Managed Tier-1 Support</span>
                          </li>
                        </ul>
                        <Button className="w-full">Switch to this Plan</Button>
                      </div>
                    </Card>

                    {/* Enterprise Plan */}
                    <Card className="border border-gray-200 overflow-hidden">
                      <div className="p-6 border-b">
                        <h3 className="font-medium mb-2">Enterprise</h3>
                        <p className="text-sm text-gray-500 mb-4">Starting at:</p>
                        <div className="text-3xl font-bold">
                          $2500<span className="text-sm font-normal text-gray-500">/mo</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="font-medium mb-4">Key Features:</p>
                        <ul className="space-y-3 mb-6">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>Custom integrations</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>High Call Volume</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>Enterprise Support</span>
                          </li>
                        </ul>
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                          Book your AI workshop
                        </Button>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

