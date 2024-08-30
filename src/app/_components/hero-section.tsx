"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight01Icon, StarIcon } from "hugeicons-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import BlurIn from "@/components/magicui/blur-in";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { ChevronRight, WandSparklesIcon } from "lucide-react";
import { FaConfluence } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden">
      <section className="py-14 lg:py-24" id="hero-section">
        <div className="container text-center">
          <div className="z-10 flex mb-8 items-center justify-center">
            <AnimatedGradientText>
              <WandSparklesIcon className="mr-2 size-4" />
              <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                )}
              >
                Introducing AI Menu
              </span>
              <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedGradientText>
          </div>

          <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
            <h1 className="text-3xl font-extrabold lg:text-6xl">
              <BlurIn word="Extend your hospitality with EasyTap" />
            </h1>
            <p className="text-balance text-muted-foreground lg:text-lg">
              EasyTap is a platform that allows you to extend your hospitality
              with ease.
            </p>
          </div>
          <Link href={"/register"}>
            <Button className="mt-10 rounded-xl" size="lg">
              Get Started <ArrowRight01Icon className="ml-2 size-5" />
            </Button>
          </Link>
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
                <StarIcon className="size-5 fill-yellow-400 text-yellow-400" />
                <StarIcon className="size-5 fill-yellow-400 text-yellow-400" />
                <StarIcon className="size-5 fill-yellow-400 text-yellow-400" />
                <StarIcon className="size-5 fill-yellow-400 text-yellow-400" />
                <StarIcon className="size-5" />
                <span className="font-semibold">4.0</span>
              </div>
              <p className="text-left font-medium text-muted-foreground">
                from 200+ reviews
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
