"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { signIn } from "next-auth/react";
import {
  ShieldCheckIcon,
  UserCircleIcon,
  EnvelopeIcon,
  LockClosedIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="bg-gradient-to-b from-white via-neutral-50 to-white min-h-screen">
      <Header />

      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Marketing Content */}
            <div className="hidden md:block">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
                <ShieldCheckIcon className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">
                  Secure Login
                </span>
              </div>

              <h1 className="text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                Welcome back to{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  EDMICH
                </span>
              </h1>

              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Access your dashboard, manage orders, and connect with thousands
                of verified suppliers across Nigeria.
              </p>

              {/* Features List */}
              <div className="space-y-4">
                {[
                  {
                    icon: ShieldCheckIcon,
                    text: "Secure & encrypted authentication",
                  },
                  {
                    icon: UserCircleIcon,
                    text: "Personalized dashboard experience",
                  },
                  {
                    icon: ArrowRightIcon,
                    text: "Instant access to marketplace",
                  },
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-neutral-700 font-medium">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl blur-2xl opacity-30"></div>

              <div className="relative bg-white rounded-3xl shadow-2xl border-2 border-neutral-200 p-8 md:p-10">
                {/* Mobile Title */}
                <div className="md:hidden mb-6">
                  <h1 className="text-3xl font-bold text-neutral-900 mb-2">
                    Welcome Back
                  </h1>
                  <p className="text-neutral-600">
                    Sign in to continue to EDMICH
                  </p>
                </div>

                <h2 className="hidden md:block text-2xl font-bold text-neutral-900 mb-2">
                  Sign In
                </h2>
                <p className="hidden md:block text-neutral-600 mb-8">
                  Choose your preferred login method
                </p>

                {/* Social Login Buttons */}
                <div className="space-y-3 mb-8">
                  <button
                    onClick={() => signIn("google")}
                    className="group w-full flex items-center justify-center gap-3 bg-white border-2 border-neutral-300 py-4 rounded-xl font-semibold text-neutral-700 hover:border-blue-400 hover:shadow-lg transition-all"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span>Continue with Google</span>
                    <ArrowRightIcon className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </button>

                  <button className="group w-full flex items-center justify-center gap-3 bg-neutral-900 py-4 rounded-xl font-semibold text-white hover:bg-neutral-800 hover:shadow-lg transition-all">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>Continue with GitHub</span>
                    <ArrowRightIcon className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </button>
                </div>

                {/* Divider */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-neutral-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-neutral-500 font-medium">
                      Or continue with email
                    </span>
                  </div>
                </div>

                {/* Email Form */}
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <EnvelopeIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full pl-12 pr-4 py-3 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <LockClosedIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full pl-12 pr-4 py-3 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-neutral-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-neutral-600">
                        Remember me
                      </span>
                    </label>
                    <Link
                      href="/forgot-password"
                      className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-[1.02] transition-all"
                  >
                    Sign In
                    <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </form>

                {/* Sign Up Link */}
                <p className="mt-6 text-center text-sm text-neutral-600">
                  Don't have an account?{" "}
                  <Link
                    href="https://chat.whatsapp.com/F2sdzUoQzpWLocya5oVkIJ"
                    className=" font-semibold text-blue-600 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Join our WhatsApp community for updates and discussions"
                  >
                    Join our WhatsApp community       
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
/*
// app/login/page.tsx
export default function LoginPage() {
  return (
    <main className="container py-16">
      <div className="max-w-md mx-auto card p-8 text-center">
        <h1 className="text-2xl font-semibold">Sign in to Edmich</h1>
        <p className="mt-2 text-neutral-600">Use your Google account to continue.</p>
        <a
          href="/api/auth/signin/google"
          className="mt-6 inline-flex items-center justify-center gap-3 btn-primary w-full"
        >
          <img src="/google.svg" alt="Google" className="h-5 w-5" />
          Sign in with Google
        </a>
        <p className="mt-4 text-xs text-neutral-500">Having trouble? Try a different account or contact info@edmich.com.</p>
      </div>
    </main>
  );
}

*/
