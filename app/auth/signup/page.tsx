"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm rounded-xl bg-white p-8 shadow-md">
        <h1 className="mb-1 text-2xl font-bold">Create your AgencyFlow account</h1>
        <p className="mb-6 text-sm text-muted-foreground">Get started with the all-in-one agency dashboard.</p>
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
            autoComplete="new-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <Button className="w-full mt-2">Sign Up</Button>
        </form>
        <div className="flex items-center justify-between mt-4 text-xs">
          <span>
            Already have an account?{" "}
            <Link href="/auth/signin" className="text-primary hover:underline">Sign in</Link>
          </span>
        </div>
      </div>
    </div>
  );
}