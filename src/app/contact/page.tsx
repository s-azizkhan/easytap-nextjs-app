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
import Link from "next/link";
import {
  AwardIcon,
  ClockIcon,
  HeadphonesIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  RocketIcon,
  ThumbsUpIcon,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function ContactPage() {
  const { theme } = useTheme();
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  }

  return (
    <section className="pb-24 pt-16">
      <div className="container">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-0 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
                <p className="text-muted-foreground mt-2 text-lg md:text-xl">
                  Have a question or want to work together? Fill out the form
                  below and we'll get back to you as soon as possible.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary rounded-full p-3">
                    <MailIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">info@acme.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary rounded-full p-3">
                    <PhoneIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary rounded-full p-3">
                    <MapPinIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-muted-foreground">
                      123 Main St, Anytown USA
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary rounded-full p-3">
                    <ClockIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Hours</h3>
                    <p className="text-muted-foreground">
                      Mon-Fri: 9am - 5pm, Sat-Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold">
                  Send Us a Message
                </CardTitle>
                <CardDescription className="text-md">
                  Have a question or want to work together? Fill out the form
                  below and we'll get back to you{" "}
                  <span className="font-bold">with in 1 business day.</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Enter your message"
                      className="min-h-[120px]"
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit">Submit</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div
              className={`p-6 ${
                theme === "dark"
                  ? "bg-white rounded-lg shadow-md shadow-white"
                  : ""
              }`}
            >
              <Image
                src="https://illustrations.popsy.co/gray/shaking-hands.svg"
                alt="Contact Us"
                width={600}
                height={400}
                className="rounded-lg object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us?</h2>
              <p className="text-muted-foreground text-lg md:text-xl">
                At Acme, we pride ourselves on our commitment to excellence and
                customer satisfaction. Our team of experts is dedicated to
                providing you with the best possible experience.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary rounded-full p-3">
                    <AwardIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Award-Winning</h3>
                    <p className="text-muted-foreground">
                      Recognized for our exceptional service.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary rounded-full p-3">
                    <HeadphonesIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">24/7 Support</h3>
                    <p className="text-muted-foreground">
                      Our team is available to assist you anytime.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary rounded-full p-3">
                    <RocketIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Fast Turnaround</h3>
                    <p className="text-muted-foreground">
                      We work efficiently to deliver results quickly.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary rounded-full p-3">
                    <ThumbsUpIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Satisfied Clients</h3>
                    <p className="text-muted-foreground">
                      Our clients rave about our exceptional service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
