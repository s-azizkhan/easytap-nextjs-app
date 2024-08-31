import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { StarIcon } from "hugeicons-react";

import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from "@/components/ui/minimal-card";
import MaxWidthWrapper from "../shared/max-width-wrapper";

function TestimonialCards() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Restaurant Owner",
      company: "Bistro Bliss",
      image: "https://www.shadcnblocks.com/images/block/avatar-1.webp",
      content:
        "EasyTap has transformed our restaurant operations. Our menu management is now seamless, and customer feedback has improved significantly!",
      rating: 5,
    },
    {
      name: "Sarah Lee",
      role: "Café Manager",
      company: "Brew & Chew",
      image: "https://www.shadcnblocks.com/images/block/avatar-1.webp",
      content:
        "As a small café, efficiency is key. EasyTap's AI-powered system has streamlined our ordering process and boosted our overall productivity.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Head Chef",
      company: "Fusion Flavors",
      image: "https://www.shadcnblocks.com/images/block/avatar-1.webp",
      content:
        "The AI menu suggestions from EasyTap have been a game-changer. It's helped us create innovative dishes that our customers love!",
      rating: 4,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <MinimalCard
            key={index}
            className="bg-white shadow-lg rounded-lg p-6"
          >
            <div className="flex items-center mb-4">
              <MinimalCardImage
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <MinimalCardTitle className="font-semibold">
                  {testimonial.name}
                </MinimalCardTitle>
                <p className="text-sm text-gray-600">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
            <MinimalCardDescription className="text-gray-700 mb-4">
              "{testimonial.content}"
            </MinimalCardDescription>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`w-5 h-5 ${
                    i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                />
              ))}
            </div>
          </MinimalCard>
        ))}
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <MaxWidthWrapper>
      <section className="py-14">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto text-center">
            <span className="py-1.5 px-5 bg-indigo-100 dark:bg-indigo-900 rounded-full text-xs font-semibold text-indigo-600 dark:text-indigo-300 text-center inline-block mb-4 transition-all duration-300 hover:bg-indigo-200 dark:hover:bg-indigo-800">
              Why EasyTap?
            </span>
            <h2 className="mb-8  md:text-5xl lg:text-6xl font-bold tracking-tight  sm:text-5xl">
              Hear from our satisfied customers
              <span className="inline-flex">
                who've transformed their hospitality with EasyTap
              </span>
              <span className="relative inline-flex mx-4">
                <span className="relative inline-flex -space-x-4">
                  {[1, 6, 3].map((num) => (
                    <Avatar
                      key={num}
                      className="w-12 h-12 border-2 border-white shadow-lg sm:w-16 sm:h-16"
                    >
                      <AvatarImage
                        src={`https://www.shadcnblocks.com/images/block/avatar-${num}.webp`}
                        alt={`Testimonial avatar ${num}`}
                      />
                    </Avatar>
                  ))}
                </span>
              </span>
            </h2>
            <p className="mb-10 text-xl leading-snug text-gray-600 dark:text-gray-300">
              Discover how restaurants of all sizes have enhanced their dining
              experience and boosted customer satisfaction using our AI-powered
              solution.
            </p>
          </div>
          <TestimonialCards />
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
