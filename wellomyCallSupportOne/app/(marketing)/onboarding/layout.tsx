"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const onboardingSteps = [
  { id: "use-case", label: "Use Case", path: "/onboarding/use-case" },
  { id: "add-agents", label: "Add Agents", path: "/onboarding/add-agents" },
  {
    id: "add-knowledge",
    label: "Add Knowledge",
    path: "/onboarding/add-knowledge",
  },
  {
    id: "integrations",
    label: "Integrations",
    path: "/onboarding/integrations",
  },
  {
    id: "preview-agent",
    label: "Preview Agent",
    path: "/onboarding/preview-agent",
  },
];

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [activeStep, setActiveStep] = useState("");

  useEffect(() => {
    // Find the current step based on the pathname
    const currentStep = onboardingSteps.find((step) =>
      pathname.includes(step.id)
    );
    if (currentStep) {
      setActiveStep(currentStep.id);
    }
  }, [pathname]);

  // Calculate completed steps
  const currentStepIndex = onboardingSteps.findIndex(
    (step) => step.id === activeStep
  );

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-4 border-b border-gray-800">
          <Link href="/" className="flex items-center">
            <div className="h-8 w-8 bg-green-600 rounded flex items-center justify-center mr-2">
              {/* <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L20 7V17L12 22L4 17V7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg> */}
              <img
                src="/wellomy-logo-small.png"
                alt="Wellomy Logo"
                className="h-8 w-8 rounded-full"
              />
            </div>
            <span className="font-bold text-xl text-green-500">
              WellomyTech
            </span>
          </Link>
        </div>

        <div className="p-4">
          <h2 className="text-xl font-bold">Get started with WellomyTech.</h2>
          <p className="text-sm text-gray-400 mt-1">
            Watch video tutorial below.
          </p>
        </div>

        <div className="p-4">
          <div className="bg-gray-800 rounded-lg p-6 flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-green-600 text-white hover:bg-green-700"
            >
              <Play className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="flex-1 p-4">
          <ul className="space-y-2">
            {onboardingSteps.map((step, index) => {
              const isCompleted = index < currentStepIndex;
              const isActive = step.id === activeStep;

              return (
                <li key={step.id} className="flex items-center">
                  <div
                    className={`h-6 w-6 rounded-full flex items-center justify-center mr-3 ${
                      isCompleted
                        ? "bg-green-600 text-white"
                        : isActive
                        ? "bg-green-600 text-white"
                        : "bg-gray-700 text-gray-400"
                    }`}
                  >
                    {isCompleted ? (
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <span className="text-xs">{index + 1}</span>
                    )}
                  </div>
                  <span
                    className={`${
                      isActive ? "text-white font-medium" : "text-gray-400"
                    }`}
                  >
                    {step.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="p-4 mt-auto">
          <div className="bg-gray-800 rounded-lg p-2 text-xs text-gray-400">
            <Link href="/dashboard" className="text-green-500 hover:underline">
              Skip Onboarding
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}
