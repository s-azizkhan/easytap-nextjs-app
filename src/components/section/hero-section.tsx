import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowRight01Icon,
  ArrowRight02Icon,
  SparklesIcon,
  StarIcon,
} from "hugeicons-react";
import Link from "next/link";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { motion } from "framer-motion";
import { APP_NAME } from "@/config/app.config";

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative flex w-full items-center justify-center overflow-hidden py-10 lg:py-0"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      >
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <img
            src="https://illustrations.popsy.co/violet/chef-serving-food.svg"
            alt="Decorative image"
            className="w-96 h-auto dark:hidden"
          />
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <img
            src="https://illustrations.popsy.co/violet/woman-eating-salad.svg"
            alt="Decorative image"
            className="w-96 h-auto dark:hidden"
          />
        </div>
        <div className="absolute left-0 top-0 lg:hidden">
          <img
            src="https://illustrations.popsy.co/violet/chef-serving-food.svg"
            alt="Decorative image"
            className="w-32 h-auto opacity-70 dark:hidden"
          />
        </div>
        <div className="absolute right-0 bottom-0 lg:hidden">
          <img
            src="https://illustrations.popsy.co/violet/woman-eating-salad.svg"
            alt="Decorative image"
            className="w-32 h-auto opacity-70 dark:hidden"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 0.7 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="absolute right-0 bottom-0 lg:hidden"
      >
        <img
          src="https://illustrations.popsy.co/violet/woman-eating-salad.svg"
          alt="Decorative image"
          className="w-32 h-auto opacity-70 dark:hidden"
        />
      </motion.div>
      <section className="pb-14 lg:py-24" id="hero-section">
        <div className="container text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="z-10 mb-8 flex items-center justify-center"
          >
            <Link href="/register" className="inline-flex">
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
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mx-auto flex max-w-screen-lg flex-col gap-8"
          >
            <h1 className="flex flex-col justify-center items-center text-center text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-50">
              Extend your hospitality
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent inline-flex items-center text-3xl sm:text-4xl lg:text-6xl mt-2">
                with {APP_NAME} AI
                <SparklesIcon className="size-5 sm:size-7 ml-1 text-purple-600" />
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-sm sm:text-base lg:text-xl leading-relaxed text-muted-foreground">
              {APP_NAME} is a cutting-edge platform that revolutionizes your
              hospitality experience, making it effortless to create stunning
              digital menus and enhance customer engagement.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 lg:mt-12 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <Link href="/register">
              <AnimatedGradientText className="rounded-xl inline-flex items-center bg-black text-white text-base sm:text-lg font-semibold px-4 py-2">
                Get Started
                <ArrowRight01Icon className="ml-2 size-4 sm:size-5" />
              </AnimatedGradientText>
            </Link>
            <Link href="#feature-section">
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl text-base sm:text-lg font-semibold w-full sm:w-auto"
              >
                Explore Features
                <ArrowRight01Icon className="ml-2 size-4 sm:size-5" />
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mx-auto mt-12 sm:mt-16 flex w-fit flex-col items-center gap-6 sm:flex-row"
          >
            <span className="mx-4 inline-flex items-center -space-x-4">
              <Avatar className="size-10 sm:size-14 border-2 border-white dark:border-gray-800">
                <AvatarImage
                  src="https://www.shadcnblocks.com/images/block/avatar-1.webp"
                  alt="User avatar"
                />
              </Avatar>
              <Avatar className="size-10 sm:size-14 border-2 border-white dark:border-gray-800">
                <AvatarImage
                  src="https://www.shadcnblocks.com/images/block/avatar-2.webp"
                  alt="User avatar"
                />
              </Avatar>
              <Avatar className="size-10 sm:size-14 border-2 border-white dark:border-gray-800">
                <AvatarImage
                  src="https://www.shadcnblocks.com/images/block/avatar-3.webp"
                  alt="User avatar"
                />
              </Avatar>
              <Avatar className="size-10 sm:size-14 border-2 border-white dark:border-gray-800">
                <AvatarImage
                  src="https://www.shadcnblocks.com/images/block/avatar-4.webp"
                  alt="User avatar"
                />
              </Avatar>
              <Avatar className="size-10 sm:size-14 border-2 border-white dark:border-gray-800">
                <AvatarImage
                  src="https://www.shadcnblocks.com/images/block/avatar-5.webp"
                  alt="User avatar"
                />
              </Avatar>
            </span>
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-1">
                <StarIcon className="size-4 sm:size-6 fill-yellow-400 text-yellow-400" />
                <StarIcon className="size-4 sm:size-6 fill-yellow-400 text-yellow-400" />
                <StarIcon className="size-4 sm:size-6 fill-yellow-400 text-yellow-400" />
                <StarIcon className="size-4 sm:size-6 fill-yellow-400 text-yellow-400" />
                <StarIcon className="size-4 sm:size-6 fill-gray-300 text-gray-300" />
                <span className="ml-2 text-lg sm:text-xl font-bold">4.0</span>
              </div>
              <p className="text-base sm:text-lg font-medium text-muted-foreground">
                from 200+ satisfied Hotels , Cafes & Restaurants
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
