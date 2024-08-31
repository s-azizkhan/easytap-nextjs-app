import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import MaxWidthWrapper from "../shared/max-width-wrapper";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";

export default function FaqSection() {
  const faqs = [
    {
      question: "What is EasyTap?",
      answer:
        "EasyTap is an AI-powered restaurant management system that streamlines menu creation, order processing, and customer feedback analysis.",
    },
    {
      question: "How does EasyTap benefit my restaurant?",
      answer:
        "EasyTap enhances operational efficiency, improves customer satisfaction, and provides data-driven insights to optimize your menu and service.",
    },
    {
      question:
        "Is EasyTap suitable for all types of restaurants, bars, and cafes?",
      answer:
        "Yes, EasyTap is designed to cater to various restaurant sizes and types, from small cafes to large multi-location chains.",
    },
    {
      question: "How easy is it to implement EasyTap in my restaurant?",
      answer:
        "EasyTap offers a user-friendly setup process with dedicated support to ensure a smooth integration into your existing operations.",
    },
  ];

  return (
    <MaxWidthWrapper>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="py-1.5 px-5 bg-indigo-100 dark:bg-indigo-900 rounded-full text-xs font-semibold text-indigo-600 dark:text-indigo-300 inline-block mb-4 transition-all duration-300 hover:bg-indigo-200 dark:hover:bg-indigo-800 shadow-sm">
              FAQ
            </span>
            <h2 className="text-pretty text-4xl font-bold lg:text-6xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Get quick answers to common questions about EasyTap and discover
              how it can revolutionize your restaurant operations.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-indigo-100 dark:border-indigo-800 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  <AccordionTrigger className="hover:bg-indigo-50 dark:hover:bg-indigo-900/50 px-6 py-4 text-left">
                    <div className="flex items-center">
                      <QuestionMarkCircledIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3 flex-shrink-0" />
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-white dark:bg-gray-800">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
