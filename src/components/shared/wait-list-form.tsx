import { ArrowRight01Icon, Mail01Icon } from "hugeicons-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

// Define the schema
const emailSchema = z.string().email("Invalid email address");

export default function WaitListForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    // Validate email
    const validation = emailSchema.safeParse(email);
    if (!validation.success) {
      toast.error(validation.error.errors[0].message);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(data.success);
        setEmail("");
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-8 flex justify-center items-center">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="bg-background flex items-center rounded-xl border border-gray-300">
              <div className="p-2">
                <Mail01Icon className="size-5" />
              </div>
              <Input
                id="email"
                className="w-full p-2 border-none focus:outline-none"
                type="email"
                placeholder="Your business email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
          </div>

          <div>
            <Button className="w-full" type="submit" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Join The Waitlist"}
              <ArrowRight01Icon className="ml-2 size-4 sm:size-5" />
            </Button>
          </div>

          <p className="text-xs mt-1 text-gray-500 dark:text-gray-300">
            Join the waitlist to get access to the AI menu and more features{" "}
            <span className="font-bold">
              without any cost for the first 100 users.
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
