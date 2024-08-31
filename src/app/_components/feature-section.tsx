import {
  PerspectiveIcon,
  SparklesIcon,
  Timer01Icon,
  ZapIcon,
  ZoomInAreaIcon,
} from "hugeicons-react";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const Features = () => {
  const features = [
    {
      title: "Streamlined Ordering",
      description:
        "Simplify your restaurant's ordering process with our intuitive digital menu system.",
      icon: <IconTerminal2 />,
    },
    {
      title: "User-Friendly Interface",
      description:
        "Enhance customer experience with our easy-to-navigate, visually appealing menu design.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Affordable Pricing",
      description:
        "Boost your business with our cost-effective solution, tailored for restaurants of all sizes.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Reliable Performance",
      description:
        "Ensure smooth operations with our stable and dependable platform.",
      icon: <IconCloud />,
    },
    {
      title: "Multi-Location Support",
      description:
        "Manage multiple restaurant locations effortlessly from a single dashboard.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Dedicated Customer Support",
      description:
        "Get assistance when you need it with our responsive support team.",
      icon: <IconHelp />,
    },
    {
      title: "Customization Options",
      description:
        "Tailor your digital menu to match your restaurant's unique brand and style.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Continuous Improvement",
      description:
        "Benefit from regular updates and new features to keep your menu system cutting-edge.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-[#8730DA] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
export default function FeatureSection() {
  return (
    <section className="py-14 lg:py-32" id="feature-section">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <span className="py-1.5 px-5 bg-indigo-100 dark:bg-indigo-900 rounded-full text-xs font-semibold text-indigo-600 dark:text-indigo-300 text-center inline-block mb-4 transition-all duration-300 hover:bg-indigo-200 dark:hover:bg-indigo-800">
            Why EasyTap?
          </span>
          <h2 className="flex flex-col items-center justify-center text-4xl font-extrabold md:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-8">
            <span className="mb-2">A better way to manage your</span>
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent inline-flex relative">
              Menu, Orders, Feedbacks & more
              <SparklesIcon className="size-7 ml-1 text-purple-600" />
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Streamline your restaurant operations with our intuitive and
            powerful management system, designed to elevate your business.
          </p>
        </div>
        <Features />
      </div>
    </section>
  );
}
