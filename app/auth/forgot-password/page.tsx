"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm rounded-xl bg-white p-8 shadow-md">
        <h1 className="mb-1 text-2xl font-bold">Reset your AgencyFlow password</h1>
        <p className="mb-6 text-sm text-muted-foreground">
          Enter your email to receive password reset instructions.
        </p>
        <form className="space-y-4">
          <Input
            type="email"
            placeholder="Email address"
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <Button className="w-full mt-2">Send Reset Link</Button>
        </form>
        <div className="flex items-center justify-between mt-4 text-xs">
          <Link href="/auth/signin" className="text-primary hover:underline">Back to sign in</Link>
        </div>
      </div>
    </div>
  );
}