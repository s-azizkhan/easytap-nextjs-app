import { Button } from "@/components/ui/button";
import { ArrowRight01Icon, ArrowUpRight01Icon } from "hugeicons-react";

export default function GenerateMenuCtaSection() {
  return (
    <section className="pb-20" id="generate-menu-cta-section">
      <div className="container">
        <div className="flex w-full flex-col gap-16 overflow-hidden rounded-lg bg-background p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-16">
          <div className="flex-1">
            <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              Generate Menu Now
            </h3>
            <p className="text-muted-foreground lg:text-lg">
              Create your menu with our AI assistant with just one click.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button variant="outline">
              Learn More
              <ArrowUpRight01Icon className="ml-2 size-5" />
            </Button>
            <Button>
              Get Started
              <ArrowRight01Icon className="ml-2 size-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
