"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm rounded-xl bg-white p-8 shadow-md">
        <h1 className="mb-1 text-2xl font-bold">Sign in to AgencyFlow</h1>
        <p className="mb-6 text-sm text-muted-foreground">Welcome back! Manage your agency in one place.</p>
        <form className="space-y-4">
          <Input
            type="email"
            placeholder="Email address"
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <Button className="w-full mt-2">Sign In</Button>
        </form>
        <div className="flex items-center justify-between mt-4 text-xs">
          <Link href="/auth/forgot-password" className="text-primary hover:underline">Forgot password?</Link>
          <span>
            Don't have an account?{" "}
            <Link href="/auth/signup" className="text-primary hover:underline">Sign up</Link>
          </span>
        </div>
      </div>
    </div>
  );
}