import React from "react";
import { Plus } from "lucide-react";
import Head from "next/head";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const faqData: FAQItem[] = [
    {
      question: "How long does a typical kitchen or bathroom renovation take?",
      answer:
        "Kitchen renovations typically take 4-6 weeks, while bathroom renovations can be completed in 2-4 weeks. The exact timeline depends on the scope of work, complexity of design, and availability of materials. We provide a detailed timeline during the consultation phase.",
    },
    {
      question: "Do you provide design services?",
      answer:
        "Yes, our in-house design team works closely with you to create custom kitchen and bathroom designs tailored to your aesthetic preferences, functional needs, and budget. We offer 3D renderings to help you visualize the final result before construction begins.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "We provide comprehensive, transparent quotes based on your specific project requirements. Factors that influence cost include the size of the space, quality of materials, complexity of the design, and any structural changes needed. We offer various price points to accommodate different budgets while maintaining our high standards of quality.",
    },
    {
      question: "Do you handle all aspects of the renovation?",
      answer:
        "Yes, we provide end-to-end service including design, demolition, construction, plumbing, electrical work, cabinetry, countertop installation, tiling, and finishing touches. This comprehensive approach ensures a seamless renovation experience and consistent quality throughout your project.",
    },
    {
      question: "What areas do you serve in Vancouver?",
      answer:
        "We serve the entire Greater Vancouver area, including Vancouver proper, North Vancouver, West Vancouver, Burnaby, Richmond, Surrey, and Coquitlam. We also handle projects in New Westminster and the Tri-Cities area.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "Yes, Cloud Bathrooms and Kitchens Vancouver is fully licensed, bonded, and insured. We comply with all local building codes and regulations, and our team consists of certified professionals with extensive experience in kitchen and bathroom renovations.",
    },
  ];

  // FAQ Schema markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item: FAQItem) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <section
        className="py-20 px-6 bg-gray-50"
        id="faq"
        aria-label="Frequently Asked Questions"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Find answers to common questions about our kitchen and bathroom
              renovation services. If you have additional questions, please
              don&apos;t hesitate to contact us.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="divide-y divide-gray-200">
              {faqData.map((faq: FAQItem, index: number) => (
                <details className="group py-5" key={index}>
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <span className="text-lg font-light">{faq.question}</span>
                    <span className="transition-transform duration-300 group-open:rotate-45">
                      <Plus className="h-5 w-5 text-gray-400" />
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-600 leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
