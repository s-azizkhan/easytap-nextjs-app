import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowRight01Icon,
  ArrowRight02Icon,
  SparklesIcon,
  StarIcon,
} from "hugeicons-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { ChevronRight, WandSparklesIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden">
      <section className="py-14 lg:py-24" id="hero-section">
        <div className="container text-center">
          <div className="z-10 mb-8 flex items-center justify-center">
            <Link
              href="https://github.com/ibelick/background-snippets"
              className="inline-flex"
            >
              <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]"></span>
                <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full bg-white px-3 py-1 text-xs font-medium leading-5 text-slate-600 backdrop-blur-xl dark:bg-black dark:text-slate-200 text-">
                  Introducing AI menu ✨
                  <span className="inline-flex items-center pl-2 text-black dark:text-white">
                    Create now <ArrowRight02Icon className="size-4 ml-2" />
                  </span>
                </div>
              </span>
            </Link>
          </div>

          <div className="mx-auto flex max-w-screen-lg flex-col gap-8">
            <h1 className="flex flex-col justify-center items-center text-center text-5xl font-extrabold text-gray-900 dark:text-gray-50 sm:text-7xl">
              Extend your hospitality
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent inline-flex items-center text-4xl lg:text-6xl mt-2">
                with EasyTap AI
                <SparklesIcon className="size-7 ml-1 text-purple-600" />
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-sm lg:text-xl leading-relaxed text-muted-foreground">
              EasyTap is a cutting-edge platform that revolutionizes your
              hospitality experience, making it effortless to create stunning
              digital menus and enhance customer engagement.
            </p>
          </div>
          <div className="lg:mt-12 mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link href="/register">
              <AnimatedGradientText className="inline-flex items-center bg-black text-white text-lg font-semibold">
                Get Started
                <ArrowRight01Icon className="ml-2 size-5" />
              </AnimatedGradientText>
            </Link>
            <Link href="/features">
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl text-lg font-semibold"
              >
                Explore Features
                <ArrowRight01Icon className="ml-2 size-5" />
              </Button>
            </Link>
          </div>
          <div className="mx-auto mt-16 flex w-fit flex-col items-center gap-6 sm:flex-row">
            <span className="mx-4 inline-flex items-center -space-x-4">
              <Avatar className="size-14 border-2 border-white dark:border-gray-800">
                <AvatarImage
                  src="https://www.shadcnblocks.com/images/block/avatar-1.webp"
                  alt="User avatar"
                />
              </Avatar>
              <Avatar className="size-14 border-2 border-white dark:border-gray-800">
                <AvatarImage
                  src="https://www.shadcnblocks.com/images/block/avatar-2.webp"
                  alt="User avatar"
                />
              </Avatar>
              <Avatar className="size-14 border-2 border-white dark:border-gray-800">
                <AvatarImage
                  src="https://www.shadcnblocks.com/images/block/avatar-3.webp"
                  alt="User avatar"
                />
              </Avatar>
              <Avatar className="size-14 border-2 border-white dark:border-gray-800">
                <AvatarImage
                  src="https://www.shadcnblocks.com/images/block/avatar-4.webp"
                  alt="User avatar"
                />
              </Avatar>
              <Avatar className="size-14 border-2 border-white dark:border-gray-800">
                <AvatarImage
                  src="https://www.shadcnblocks.com/images/block/avatar-5.webp"
                  alt="User avatar"
                />
              </Avatar>
            </span>
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-1">
                <StarIcon className="size-6 fill-yellow-400 text-yellow-400" />
                <StarIcon className="size-6 fill-yellow-400 text-yellow-400" />
                <StarIcon className="size-6 fill-yellow-400 text-yellow-400" />
                <StarIcon className="size-6 fill-yellow-400 text-yellow-400" />
                <StarIcon className="size-6 fill-gray-300 text-gray-300" />
                <span className="ml-2 text-xl font-bold">4.0</span>
              </div>
              <p className="text-lg font-medium text-muted-foreground">
                from 200+ satisfied Hotels , Cafes & Restaurants
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
