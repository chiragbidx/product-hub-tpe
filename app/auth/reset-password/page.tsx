"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ResetPassword() {
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm rounded-xl bg-white p-8 shadow-md">
        <h1 className="mb-1 text-2xl font-bold">Set a new AgencyFlow password</h1>
        <p className="mb-6 text-sm text-muted-foreground">
          Create a strong password to keep your agency secure.
        </p>
        <form className="space-y-4">
          <Input
            type="password"
            placeholder="New password"
            autoComplete="new-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <Button className="w-full mt-2">Update Password</Button>
        </form>
        <div className="flex items-center justify-between mt-4 text-xs">
          <Link href="/auth/signin" className="text-primary hover:underline">Back to sign in</Link>
        </div>
      </div>
    </div>
  );
}