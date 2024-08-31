"use client";
import HeroSection from "../components/section/hero-section";
import FeatureSection from "../components/section/feature-section";
import TestimonialSection from "../components/section/testimonial-section";
import PricingSection from "../components/section/pricing-section";
import FaqSection from "../components/section/faq-section";
import GenerateMenuCtaSection from "../components/section/generate-menu-cta-section";

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
