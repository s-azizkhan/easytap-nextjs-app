"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="py-32" id="hero-section">
      <div className="container text-center">
        <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
          <h1 className="text-3xl font-extrabold lg:text-6xl">
            Extend your hospitality with EasyTap
          </h1>
          <p className="text-balance text-muted-foreground lg:text-lg">
            EasyTap is a platform that allows you to extend your hospitality
            with ease.
          </p>
        </div>
        <Button size="lg" className="mt-10">
          Discover all components
        </Button>
        <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
          <span className="mx-4 inline-flex items-center -space-x-4">
            <Avatar className="size-14 border">
              <AvatarImage
                src="https://www.shadcnblocks.com/images/block/avatar-1.webp"
                alt="placeholder"
              />
            </Avatar>
            <Avatar className="size-14 border">
              <AvatarImage
                src="https://www.shadcnblocks.com/images/block/avatar-2.webp"
                alt="placeholder"
              />
            </Avatar>
            <Avatar className="size-14 border">
              <AvatarImage
                src="https://www.shadcnblocks.com/images/block/avatar-3.webp"
                alt="placeholder"
              />
            </Avatar>
            <Avatar className="size-14 border">
              <AvatarImage
                src="https://www.shadcnblocks.com/images/block/avatar-4.webp"
                alt="placeholder"
              />
            </Avatar>
            <Avatar className="size-14 border">
              <AvatarImage
                src="https://www.shadcnblocks.com/images/block/avatar-5.webp"
                alt="placeholder"
              />
            </Avatar>
          </span>
          <div>
            <div className="flex items-center gap-1">
              <Star className="size-5 fill-yellow-400 text-yellow-400" />
              <Star className="size-5 fill-yellow-400 text-yellow-400" />
              <Star className="size-5 fill-yellow-400 text-yellow-400" />
              <Star className="size-5 fill-yellow-400 text-yellow-400" />
              <Star className="size-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">5.0</span>
            </div>
            <p className="text-left font-medium text-muted-foreground">
              from 200+ reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
