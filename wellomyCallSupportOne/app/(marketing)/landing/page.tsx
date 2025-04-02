"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  BarChart3,
  BookOpen,
  ChevronRight,
  Headphones,
  Megaphone,
  Play,
  Sparkles,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-200 ${
          isScrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img
                  src="/wellomy-logo-small.png"
                  alt="Wellomy Logo"
                  className="h-8 w-8 bg-green-600 rounded flex items-center justify-center mr-2"
                />
                <span className="font-bold text-xl">WellomyTech</span>
              </Link>
              <nav className="hidden md:ml-10 md:flex md:space-x-8">
                <Link
                  href="#features"
                  className="text-gray-600 hover:text-green-600"
                >
                  Features
                </Link>
                <Link
                  href="#how-it-works"
                  className="text-gray-600 hover:text-green-600"
                >
                  How It Works
                </Link>
                <Link
                  href="#pricing"
                  className="text-gray-600 hover:text-green-600"
                >
                  Pricing
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-600 hover:text-green-600"
                >
                  Contact
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="text-gray-600 hover:text-green-600 font-medium"
              >
                Login
              </Link>
              <Link href="/signup">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Automate Calls.
                <br />
                Empower Agents.
                <br />
                Elevate Engagement.
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                WellomyTech helps businesses automate customer interactions with
                AI-powered voice agents, delivering personalized experiences at
                scale.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
                  Book a Demo
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="px-8 py-6 text-lg">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Video
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg">
                  <div className="relative z-10">
                    <div className="flex items-center justify-center">
                      <div className="w-full max-w-md">
                        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                          <div className="flex items-center mb-4">
                            <button
                              className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center mr-4 hover:bg-green-200 transition-colors"
                              onClick={() =>
                                window.alert(
                                  "AI Agent: Hello! How can I help you today?"
                                )
                              }
                              aria-label="Talk to AI Agent"
                            >
                              {/* <Headphones className="h-5 w-5 text-green-600" /> */}
                              <img
                                src="/wellomy-logo-small.png"
                                alt="Wellomy Logo"
                                className="h-8 w-8"
                              />
                            </button>
                            <div>
                              <h3 className="font-medium">AI Agent</h3>
                              <div className="flex items-center text-sm text-gray-500">
                                <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                                <span>Active</span>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="bg-gray-100 rounded-lg p-3 text-sm">
                              <p>
                                Hello! I'm your AI assistant. How can I help you
                                today?
                              </p>
                            </div>
                            <div className="bg-green-100 rounded-lg p-3 text-sm ml-auto max-w-[80%]">
                              <p>I'd like to know more about your services.</p>
                            </div>
                            <div className="bg-gray-100 rounded-lg p-3 text-sm">
                              <p>
                                I'd be happy to tell you about our services! We
                                offer...
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div className="text-sm text-gray-500">
                            <span className="font-medium">3 min</span> average
                            response time
                          </div>
                          <div className="text-sm text-gray-500">
                            <span className="font-medium">98%</span>{" "}
                            satisfaction rate
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-20 w-20 bg-green-200 rounded-full opacity-50"></div>
                <div className="absolute bottom-0 left-0 -mb-4 -ml-4 h-16 w-16 bg-blue-200 rounded-full opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 mb-8">
            Trusted by innovative companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* Company logos - using placeholder shapes */}
            <div className="h-8 w-24 bg-gray-200 rounded"></div>
            <div className="h-8 w-32 bg-gray-200 rounded"></div>
            <div className="h-8 w-28 bg-gray-200 rounded"></div>
            <div className="h-8 w-20 bg-gray-200 rounded"></div>
            <div className="h-8 w-36 bg-gray-200 rounded"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create, deploy, and manage AI-powered voice
              agents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <Card className="border border-gray-200 hover:border-green-200 hover:shadow-md transition-all p-6">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Megaphone className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">Campaign Automation</h3>
              <p className="text-gray-600">
                Create and manage outbound call campaigns with customizable
                scripts and intelligent routing.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="border border-gray-200 hover:border-green-200 hover:shadow-md transition-all p-6">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Headphones className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">AI Voice Agents</h3>
              <p className="text-gray-600">
                Deploy natural-sounding AI agents that understand context and
                respond intelligently to customer inquiries.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="border border-gray-200 hover:border-green-200 hover:shadow-md transition-all p-6">
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">
                Knowledge Integration
              </h3>
              <p className="text-gray-600">
                Easily upload and organize your knowledge base to empower AI
                agents with accurate information.
              </p>
            </Card>

            {/* Feature 4 */}
            <Card className="border border-gray-200 hover:border-green-200 hover:shadow-md transition-all p-6">
              <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">Call Analytics</h3>
              <p className="text-gray-600">
                Gain insights from comprehensive analytics and reporting on call
                performance and customer interactions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with WellomyTech in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload className="h-8 w-8 text-green-600" />
              </div>
              <div
                className="absolute top-10 left-full w-full h-0.5 bg-green-200 hidden md:block"
                style={{ width: "calc(100% - 5rem)" }}
              ></div>
              <h3 className="text-xl font-medium mb-2">1. Upload Knowledge</h3>
              <p className="text-gray-600">
                Upload your documents, FAQs, and product information to create a
                comprehensive knowledge base.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative">
              <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Megaphone className="h-8 w-8 text-green-600" />
              </div>
              <div
                className="absolute top-10 left-full w-full h-0.5 bg-green-200 hidden md:block"
                style={{ width: "calc(100% - 5rem)" }}
              ></div>
              <h3 className="text-xl font-medium mb-2">2. Launch Campaigns</h3>
              <p className="text-gray-600">
                Create and configure your campaigns with AI agents tailored to
                your business needs.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">
                3. Track Interactions
              </h3>
              <p className="text-gray-600">
                Monitor performance, analyze call data, and continuously improve
                your customer interactions.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/signup">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
                Get Started Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from businesses that have transformed their customer
              interactions with WellomyTech
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-medium">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">
                    Customer Service Director, TechCorp
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "WellomyTech has revolutionized our customer service operations.
                Our AI agents handle 70% of inquiries, freeing our team to focus
                on complex issues."
              </p>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-medium">Michael Chen</h4>
                  <p className="text-sm text-gray-500">CEO, GrowthStartup</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "We've seen a 40% increase in lead qualification since
                implementing WellomyTech. The ROI has been incredible for our
                sales team."
              </p>
            </Card>

            {/* Testimonial 3 */}
            <Card className="border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-medium">Jessica Williams</h4>
                  <p className="text-sm text-gray-500">
                    Marketing Director, RetailBrand
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The analytics and insights from WellomyTech have helped us
                refine our messaging and better understand our customers'
                needs."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to transform your customer interactions?
            </h2>
            <p className="text-xl mb-8">
              Join thousands of businesses using WellomyTech to deliver
              exceptional customer experiences at scale.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-white text-green-700 hover:bg-gray-100 px-8 py-6 text-lg">
                Book a Demo
              </Button>
              <Button className="bg-white text-green-700 hover:bg-gray-100 px-8 py-6 text-lg border-white">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 bg-green-600 rounded flex items-center justify-center mr-2">
                  <img
                    src="/wellomy-logo-small.png"
                    alt="Wellomy Logo"
                    className="h-8 w-8 bg-green-600 rounded flex items-center justify-center mr-2"
                  />
                </div>
                <span className="font-bold text-xl text-white">
                  WellomyTech
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                AI-powered voice agents for exceptional customer interactions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-medium mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    GDPR
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400">
            <p>© 2025 WellomyTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
