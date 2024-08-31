import { Book, Menu, Sunset, User2Icon, Zap } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { AiImageIcon } from "hugeicons-react";

const subMenuItemsTwo = [
  {
    title: "Help Center",
    description: "Get all the answers you need right here",
    icon: <Zap className="size-5 shrink-0" />,
    href: "/faq",
  },
  {
    title: "Contact Us",
    description: "We are here to help you with any questions you have",
    icon: <Sunset className="size-5 shrink-0" />,
    href: "/contact",
  },
  {
    title: "Terms of Service",
    description: "Our terms and conditions for using our services",
    icon: <Book className="size-5 shrink-0" />,
    href: "#",
  },
];

const DesktopNavigation = () => {
  return (
    <nav className="hidden w-full items-center justify-between lg:flex">
      {/* Logo and Links */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2">
            {/* TODO: add logo */}
            <span className="text-xl font-bold">EasyTap</span>
          </div>
        </Link>
      </div>
      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        {/* Navigation Links */}
        <div className="flex items-center gap-4">
          <Link
            href="/features"
            className={cn(
              "text-muted-foreground",
              navigationMenuTriggerStyle,
              buttonVariants({ variant: "ghost" })
            )}
          >
            Features
          </Link>
          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              {/* Resources Menu */}
              <NavigationMenuItem className="text-muted-foreground">
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-80 p-3">
                    {subMenuItemsTwo.map((item, idx) => (
                      <li key={idx}>
                        <NavigationMenuLink
                          href={item.href}
                          className={cn(
                            "flex items-start gap-4 rounded-md p-3 transition hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                        >
                          {item.icon}
                          <div>
                            <div className="text-sm font-semibold">
                              {item.title}
                            </div>
                            <p className="text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {/* Additional Links */}
          <Link
            href="/pricing"
            className={cn(
              "text-muted-foreground",
              navigationMenuTriggerStyle,
              buttonVariants({ variant: "ghost" })
            )}
          >
            Pricing
          </Link>
          <Link
            href="/blogs"
            className={cn(
              "text-muted-foreground",
              navigationMenuTriggerStyle,
              buttonVariants({ variant: "ghost" })
            )}
          >
            Blog
          </Link>
        </div>
        <Link href="/register">
          <Button>
            <span>Generate Menu</span>
            <AiImageIcon className="size-4 ml-2" />
          </Button>
        </Link>
        {/* Mode Toggle */}
        <ModeToggle />
      </div>
    </nav>
  );
};

const MobileNavigation = () => {
  return (
    <div className="flex w-full items-center justify-between lg:hidden">
      {/* Logo */}
      <Link href="/">
        <div className="flex items-center gap-2">
          {/* TODO: add logo */}
          <span className="text-xl font-bold">EasyTap</span>
        </div>
      </Link>
      <Link href="/register">
        <Button>
          <span>Generate Menu</span>
          <AiImageIcon className="size-4 ml-2" />
        </Button>
      </Link>
      {/* Mobile Menu Button */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent className="overflow-y-auto">
          <SheetHeader>
            <SheetTitle>
              <Link href="/">
                <div className="flex items-center gap-2">
                  {/* TODO: add logo */}
                  <span className="text-xl font-bold">EasyTap</span>
                </div>
              </Link>
            </SheetTitle>
          </SheetHeader>
          <div className="mb-8 mt-8 flex flex-col gap-4">
            <a href="#" className="font-semibold">
              Home
            </a>
            {/* Accordion for Resources */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="resources" className="border-b-0">
                <AccordionTrigger className="py-0 font-semibold hover:no-underline bg-transparent">
                  Resources
                </AccordionTrigger>
                <AccordionContent className="mt-2">
                  {subMenuItemsTwo.map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className={cn(
                        "flex items-start gap-4 rounded-md p-3 transition hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      )}
                    >
                      {item.icon}
                      <div>
                        <div className="text-sm font-semibold">
                          {item.title}
                        </div>
                        <p className="text-sm leading-snug text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <a href="#" className="font-semibold">
              Pricing
            </a>
            <a href="#" className="font-semibold">
              Blog
            </a>
          </div>
          {/* Footer Links and Buttons */}
          <div className="border-t pt-4">
            <div className="grid grid-cols-2 gap-4">
              <a
                href="#"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "justify-start text-muted-foreground"
                )}
              >
                Press
              </a>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "justify-start text-muted-foreground"
                )}
              >
                Contact
              </Link>
              <a
                href="#"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "justify-start text-muted-foreground"
                )}
              >
                Imprint
              </a>
              <a
                href="#"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "justify-start text-muted-foreground"
                )}
              >
                Sitemap
              </a>
            </div>
            <div className="mt-2 flex flex-col gap-3">
              <Link href="/register">
                <Button>
                  <span>Generate Menu</span>
                  <AiImageIcon className="size-4 ml-2" />
                </Button>
              </Link>
              <Link href="/sign-in">
                <Button variant="outline">
                  Log in <User2Icon className="size-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default function PageNavbar() {
  return (
    <>
      <header className="h-16 sticky lg:top-5 top-0 z-50 w-full">
        <div className="lg:container h-full items-center justify-around w-full border-border/40">
          <div className="flex px-2 lg:px-10 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 w-full h-full lg:rounded-3xl">
            {/* Desktop Navigation */}
            <DesktopNavigation />
            {/* Mobile Navigation */}
            <MobileNavigation />
          </div>
        </div>
      </header>
    </>
  );
}
