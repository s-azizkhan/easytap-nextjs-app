"use client";
import { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Globe, UserRound } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";

export default function LoginPage() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      console.log("Login successful");
    } else {
      // Handle errors
    }
  }

  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-4">
          <p className="text-3xl font-bold inline-flex justify-center">
            EasyTap
          </p>

          <Card className="mx-auto max-w-sm w-full">
            <CardHeader>
              <CardTitle className="text-xl">Log in</CardTitle>
              <CardDescription>
                Enter your information to login.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Button variant="outline" className="w-full">
                  <FaGoogle className="mr-2 size-4" />
                  Continue with Google
                </Button>
                <div className="flex items-center gap-4">
                  <span className="h-px w-full bg-input"></span>
                  <span className="text-xs text-muted-foreground">OR</span>
                  <span className="h-px w-full bg-input"></span>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="#" className="text-sm underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Log in
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account yet?{" "}
                <Link href="/signup" className="underline">
                  Sign up
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
