// "use client";

// import type React from "react";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { Mail, Lock } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { GoogleLoginButton } from "@/components/google-login-button";

// export default function LoginPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState<{ email?: string; password?: string }>(
//     {}
//   );
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Reset errors
//     setErrors({});

//     // Validate form
//     let hasErrors = false;
//     const newErrors: { email?: string; password?: string } = {};

//     if (!email) {
//       newErrors.email = "Email is required";
//       hasErrors = true;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = "Email is invalid";
//       hasErrors = true;
//     }

//     if (!password) {
//       newErrors.password = "Password is required";
//       hasErrors = true;
//     }

//     if (hasErrors) {
//       setErrors(newErrors);
//       return;
//     }

//     // Submit form
//     setIsLoading(true);

//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       // Redirect to onboarding flow instead of dashboard
//       router.push("/onboarding/use-case");
//     } catch (error) {
//       console.error("Login failed:", error);
//       setErrors({ email: "Invalid email or password" });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-4">
//       <div className="w-full max-w-md">
//         <div className="flex justify-center mb-8">
//           <Image
//             src="/wellomy-logo-small.png"
//             alt="WellomyTech Logo"
//             width={100}
//             height={100}
//             className="rounded-full"
//           />
//         </div>

//         <div className="bg-white p-8 rounded-lg shadow-md w-full">
//           <h1 className="text-2xl font-bold text-center mb-6">
//             Login to WellomyTech
//           </h1>

//           <form onSubmit={handleSubmit}>
//             <div className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="email">Email</Label>
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="Email"
//                     //className={`pl-10 ${errors.email ? "border-red-500" : ""}`}
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </div>
//                 {/*{errors.email && (
//                   <p className="text-red-500 text-sm">{errors.email}</p>
//                 )}*/}
//               </div>

//               <div className="space-y-2">
//                 <div className="flex justify-between">
//                   <Label htmlFor="password">Password</Label>
//                   <Link
//                     href="/forgot-password"
//                     className="text-sm text-green-600 hover:text-green-800"
//                   >
//                     Forgot Password?
//                   </Link>
//                 </div>
//                 <div className="relative">
//                   <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                   <Input
//                     id="password"
//                     type="password"
//                     placeholder="Password"
//                     //className={`pl-10 ${errors.password ? "border-red-500" : ""
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </div>
//                 {/*{errors.password && (
//                   <p className="text-red-500 text-sm">{errors.password}</p>
//                 )}*/}
//               </div>

//               <Button
//                 type="submit"
//                 className="w-full bg-green-600 hover:bg-green-700 text-white"
//                 disabled={isLoading}
//               >
//                 {isLoading ? "Logging in..." : "Login"}
//               </Button>
//             </div>
//           </form>

//           <div className="mt-6 text-center text-sm">
//             <p>
//               Don't have an account?{" "}
//               <Link
//                 href="/signup"
//                 className="text-green-600 hover:text-green-800 font-medium"
//               >
//                 Sign Up
//               </Link>
//             </p>
//           </div>

//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">
//                   Or continue with
//                 </span>
//               </div>
//             </div>

//             <div className="mt-6 grid grid-cols-3 gap-3">
//               {/* <button
//                 type="button"
//                 className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//               >
//                 <svg
//                   className="h-5 w-5 text-red-500"
//                   aria-hidden="true"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
//                 </svg>
//               </button> */}
//               <GoogleLoginButton className="w-full" />
//               <button
//                 type="button"
//                 className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//               >
//                 <svg
//                   className="h-5 w-5 text-blue-600"
//                   aria-hidden="true"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//                 </svg>
//               </button>

//               <button
//                 type="button"
//                 className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//               >
//                 <svg
//                   className="h-5 w-5 text-blue-400"
//                   aria-hidden="true"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client"

import Image from "next/image"
import { GoogleLoginButton } from "@/components/google-login-button"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
        <Image
          src="/wellomy-logo-small.png"
          alt="WellomyTech Logo"
          width={100}
          height={100}
          className="rounded-full mb-6"
        />
        <h1 className="text-2xl font-bold text-center mb-6">
          Login to WellomyTech
        </h1>
        <GoogleLoginButton className="w-full" />
      </div>
    </div>
  )
}
