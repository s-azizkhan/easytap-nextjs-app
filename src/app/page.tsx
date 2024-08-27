import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Star,
  DollarSign,
  MessagesSquare,
  PersonStanding,
  Timer,
  Zap,
  ZoomIn,
} from "lucide-react";

const features = [
  {
    title: "Performance",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
    icon: <Timer className="size-4 md:size-6" />,
  },
  {
    title: "Innovation",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
    icon: <Zap className="size-4 md:size-6" />,
  },
  {
    title: "Quality",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
    icon: <ZoomIn className="size-4 md:size-6" />,
  },
  {
    title: "Accessibility",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
    icon: <PersonStanding className="size-4 md:size-6" />,
  },
  {
    title: "Affordability",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
    icon: <DollarSign className="size-4 md:size-6" />,
  },
  {
    title: "Customer Support",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
    icon: <MessagesSquare className="size-4 md:size-6" />,
  },
];

export default function Home() {
  return (
    <main>
      <section className="py-32">
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

      <section className="pb-32">
        <div className="container mx-auto max-w-screen-xl">
          <p className="mb-4 text-xs text-muted-foreground md:pl-5">Features</p>
          <h2 className="text-3xl font-bold md:pl-5 lg:text-4xl">
            Our Core Features
          </h2>
          <div className="mx-auto mt-14 grid gap-x-20 gap-y-8 md:gap-y-6 md:grid-cols-2 lg:mt-20">
            {features.map((feature, idx) => (
              <div className="flex gap-6 rounded-lg md:block md:p-5" key={idx}>
                <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
                  {feature.icon}
                </span>
                <div>
                  <h3 className="font-medium md:mb-2 md:text-xl">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container">
          <div className="flex w-full flex-col gap-16 overflow-hidden rounded-lg bg-accent p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-16">
            <div className="flex-1">
              <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                Generate Menu Now
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                Create your menu with our AI assistant with just one click.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button variant="outline">Learn More</Button>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
