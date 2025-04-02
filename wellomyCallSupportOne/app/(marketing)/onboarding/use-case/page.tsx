"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function UseCasePage() {
  const router = useRouter();
  const [selectedUseCase, setSelectedUseCase] = useState<string | null>(null);

  const handleNextStep = () => {
    router.push("/onboarding/add-agents");
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-2">
        <div></div>
        <Button variant="ghost" size="sm" className="text-gray-500">
          Log Out
        </Button>
      </div>

      <h1 className="text-3xl font-bold mb-2">
        Welcome to WellomyTech! Choose your starting use case.
      </h1>
      <p className="text-gray-600 mb-8">
        We're excited to help your business use AI to handle customer calls
        through our expert-led AI voice platform.
      </p>

      <div className="space-y-4">
        <Card
          className={`p-6 border-2 cursor-not-allowed opacity-70 border-gray-200`}
        >
          <div className="flex items-start">
            <div className="h-6 w-6 bg-gray-100 rounded-full flex items-center justify-center mr-3">
              <ArrowUpRight className="h-4 w-4 text-gray-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium">
                Use WellomyTech for Outbound Calling
              </h3>
              <p className="text-gray-500">This Feature is Coming Soon...</p>
              <span className="inline-block mt-2 text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded-full">
                Coming Soon
              </span>
            </div>
          </div>
        </Card>

        <Card
          className={`p-6 border-2 cursor-pointer ${
            selectedUseCase === "inbound"
              ? "border-green-500 bg-green-50"
              : "border-gray-200 hover:border-green-200"
          }`}
          onClick={() => setSelectedUseCase("inbound")}
        >
          <div className="flex items-start">
            <div className="h-6 w-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <Phone className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium">
                Use WellomyTech for Inbound Calling
              </h3>
              <p className="text-gray-500">
                Utilize WellomyTech to handle inbound calls from your customers.
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-8">
        <Button
          className="bg-green-600 hover:bg-green-700 text-white"
          onClick={handleNextStep}
          disabled={!selectedUseCase}
        >
          Next Step
        </Button>
      </div>
    </div>
  );
}
