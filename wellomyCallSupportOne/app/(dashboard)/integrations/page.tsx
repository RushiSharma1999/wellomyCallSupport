import { Search, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        {/* Main Content */}
        <div className="flex-1 p-8">
          <h1 className="text-2xl font-bold mb-8">Integrations</h1>

          {/* Tabs */}
          <div className="mb-8">
            <div className="border-b">
              <div className="flex items-center space-x-1">
                <Button variant="link" className="text-green-600 border-b-2 border-green-600 rounded-none px-4 py-2">
                  <Zap className="h-4 w-4 mr-2" />
                  Zapier Integration
                </Button>
              </div>
            </div>
          </div>

          {/* Zapier Integration Content */}
          <div>
            <p className="mb-4">You can use Zapier to connect your account with thousands of other apps.</p>

            <Button className="bg-gray-900 hover:bg-black text-white mb-6">Open workflows</Button>

            {/* AI Automation Section */}
            <div className="border border-yellow-400 rounded-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <h2 className="text-lg font-medium">What would you like to automate?</h2>
                <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">AI beta</span>
              </div>

              <div className="flex mb-2">
                <Input type="text" placeholder="The more details, the better." className="flex-1 mr-2" />
                <Button className="bg-gray-900 hover:bg-black text-white">Generate</Button>
              </div>

              <p className="text-sm text-gray-500">
                Example: When I add a reaction to a Slack message, create a card in Trello.
              </p>
            </div>

            {/* Connect Apps Section */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="flex-1">
                  <p className="font-medium">Connect this app...</p>
                  <div className="flex items-center border rounded-md p-2 mt-2 bg-white">
                    <div className="h-6 w-6 bg-green-600 rounded flex items-center justify-center mr-2">
                      <Sparkles className="h-4 w-4 text-white" />
                    </div>
                    <span>AQX</span>
                  </div>
                </div>

                <div className="flex items-center justify-center mx-4">
                  <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-500">+</span>
                  </div>
                </div>

                <div className="flex-1">
                  <p className="font-medium">with this one!</p>
                  <div className="relative mt-2">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Input type="text" placeholder="Search for thousands of apps" className="pl-10" />
                  </div>
                </div>
              </div>
            </div>

            {/* Popular Workflows */}
            <div>
              <h2 className="text-lg font-medium mb-4">Popular workflows</h2>

              <div className="space-y-4">
                {/* Workflow 1 */}
                <div className="border rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex mr-4">
                      <div className="h-8 w-8 bg-green-600 rounded flex items-center justify-center mr-1">
                        <Sparkles className="h-5 w-5 text-white" />
                      </div>
                      <div className="h-8 w-8 bg-blue-500 rounded flex items-center justify-center">
                        <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22.08 21.48H1.92a.48.48 0 0 1-.48-.48V3a.48.48 0 0 1 .48-.48h20.16c.265 0 .48.215.48.48v18a.48.48 0 0 1-.48.48z" />
                          <path fill="white" d="M6 13.51l1.57 2.09 2.54-3.83 3.26 4.16 1.55-1.85 1.55 1.85" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">Send direct Slack messages for new calls completed in AQX</p>
                      <p className="text-sm text-gray-500">AQX + Slack</p>
                    </div>
                  </div>
                  <Button className="bg-gray-900 hover:bg-black text-white">Use this workflow</Button>
                </div>

                {/* Workflow 2 */}
                <div className="border rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex mr-4">
                      <div className="h-8 w-8 bg-green-600 rounded flex items-center justify-center mr-1">
                        <Sparkles className="h-5 w-5 text-white" />
                      </div>
                      <div className="h-8 w-8 bg-blue-500 rounded flex items-center justify-center">
                        <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22.08 21.48H1.92a.48.48 0 0 1-.48-.48V3a.48.48 0 0 1 .48-.48h20.16c.265 0 .48.215.48.48v18a.48.48 0 0 1-.48.48z" />
                          <path fill="white" d="M6 13.51l1.57 2.09 2.54-3.83 3.26 4.16 1.55-1.85 1.55 1.85" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">Send Slack messages for every completed AQX call</p>
                      <p className="text-sm text-gray-500">AQX + Slack</p>
                    </div>
                  </div>
                  <Button className="bg-gray-900 hover:bg-black text-white">Use this workflow</Button>
                </div>

                {/* Workflow 3 */}
                <div className="border rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex mr-4">
                      <div className="h-8 w-8 bg-green-600 rounded flex items-center justify-center mr-1">
                        <Sparkles className="h-5 w-5 text-white" />
                      </div>
                      <div className="h-8 w-8 bg-blue-500 rounded flex items-center justify-center">
                        <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M21.5 21h-19A1.5 1.5 0 0 1 1 19.5v-15A1.5 1.5 0 0 1 2.5 3h19A1.5 1.5 0 0 1 23 4.5v15a1.5 1.5 0 0 1-1.5 1.5z" />
                          <path
                            fill="white"
                            d="M10.5 13h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0-4h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm9 8h-14a.5.5 0 0 0 0 1h14a.5.5 0 0 0 0-1zm0-8h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm0 4h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">
                        Send email through Microsoft Outlook when calls are completed in AQX
                      </p>
                      <p className="text-sm text-gray-500">AQX + Microsoft Outlook</p>
                    </div>
                  </div>
                  <Button className="bg-gray-900 hover:bg-black text-white">Use this workflow</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

