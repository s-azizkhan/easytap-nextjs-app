"use client";
import HeroSection from "./_components/hero-section";
import FeatureSection from "./_components/feature-section";
import TestimonialSection from "./_components/testimonial-section";
import PricingSection from "./_components/pricing-section";
import FaqSection from "./_components/faq-section";
import GenerateMenuCtaSection from "./_components/generate-menu-cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <PricingSection />
      <FaqSection />
      <GenerateMenuCtaSection />
    </>
  );
}
