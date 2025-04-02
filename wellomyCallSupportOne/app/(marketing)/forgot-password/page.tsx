"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ email?: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setErrors({});

    // Validate form
    if (!email) {
      setErrors({ email: "Email is required" });
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors({ email: "Email is invalid" });
      return;
    }

    // Submit form
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
      setIsSubmitted(true);
    } catch (error) {
      console.error("Password reset request failed:", error);
      setErrors({
        email: "Failed to send reset instructions. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Image
            src="/wellomy-logo-small.png"
            alt="WellomyTech Logo"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md w-full">
          <h1 className="text-2xl font-bold text-center mb-6">
            Forgot Password
          </h1>

          {isSubmitted ? (
            <div className="space-y-6">
              <Alert className="bg-green-50 border-green-200">
                <AlertDescription>
                  Password reset instructions have been sent to your email.
                  Please check your inbox.
                </AlertDescription>
              </Alert>
              <div className="text-center">
                <Link href="/login">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Return to Login
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <>
              <p className="text-gray-600 mb-6">
                Enter your email address and we'll send you instructions to
                reset your password.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className={`pl-10 ${
                          errors.email ? "border-red-500" : ""
                        }`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Reset Instructions"}
                  </Button>
                </div>
              </form>

              <div className="mt-6 text-center text-sm">
                <p>
                  Remember your password?{" "}
                  <Link
                    href="/login"
                    className="text-green-600 hover:text-green-800 font-medium"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
