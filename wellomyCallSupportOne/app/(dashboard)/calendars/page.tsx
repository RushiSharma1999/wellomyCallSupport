import { Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function GlobalActionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        {/* Main Content */}
        <div className="flex-1 p-8">
          <h1 className="text-2xl font-bold mb-8">Calendars</h1>

          {/* Tabs */}
          <div className="mb-8">
            <div className="border-b">
              <div className="flex items-center space-x-1">
                <Button
                  variant="link"
                  className="text-green-600 border-b-2 border-green-600 rounded-none px-4 py-2"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Calendar Integration
                </Button>
              </div>
            </div>
          </div>

          {/* Calendar Integration Content */}
          <div className="max-w-3xl">
            <div className="mb-8">
              <p className="text-lg mb-1">Set up a calendar integration.</p>
              <p className="text-gray-500">
                Select a calendar integration to connect to your account.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-medium mb-6">Add New Calendar</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Calendar Provider
                  </label>
                  <RadioGroup defaultValue="google">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="google" id="google" />
                        <Label htmlFor="google" className="flex items-center">
                          <div className="h-6 w-6 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                            <span className="text-white font-bold text-xs">
                              G
                            </span>
                          </div>
                          google.com
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ical" id="ical" />
                        <Label htmlFor="ical" className="flex items-center">
                          <div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center mr-2">
                            <Calendar className="h-4 w-4 text-white" />
                          </div>
                          iCal.com
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                    Connect Account
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                  <p className="text-xs text-gray-500 mt-2">
                    You'll be redirected to the provider's authentication page
                    to authorize access.
                  </p>
                </div>

                <div className="flex space-x-2 pt-4 border-t mt-6">
                  <Button variant="outline" className="flex-1">
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
