'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    q: "Is my donation eligible for 80G tax exemption in India?",
    a: "Yes! HopeBridge Foundation is registered under Section 80G of the Income Tax Act. You will immediately receive an official 80G tax exemption receipt via email for all eligible donations.",
  },
  {
    q: "How are my donated funds utilized and audited?",
    a: "Over 88% of all funds directly support grassroots field programs — providing tuition fees, school meals, medical aid, and elderly hospice care. We undergo annual independent audits and publish our verified statements.",
  },
  {
    q: "Can I visit the orphanage or elder care home in person?",
    a: "Absolutely! We welcome donors, mentors, and families to visit our care centers in Chennai. Please contact our volunteer desk 48 hours ahead so our coordinators can give you a guided tour.",
  },
  {
    q: "How can our company partner with HopeBridge for CSR?",
    a: "We collaborate with corporate partners on custom CSR initiatives aligned with Schedule VII — including rural school STEM transformations, free healthcare drives, and employee volunteering days.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-24 bg-gray-50/70 border-t border-gray-100">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Image matching reference design */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=700&q=85"
                alt="HopeBridge children and community supported by volunteers"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs uppercase font-bold text-amber-300 tracking-wider mb-1">
                  Have Any Questions?
                </p>
                <p className="text-sm font-bold">
                  We are here to help you understand how your impact works.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-7">
            <SectionLabel>Common Inquiries</SectionLabel>
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Everything you need to know about our work, compliance, and how your contribution transforms lives."
              align="left"
            />

            <div className="space-y-4 mt-8">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={faq.q}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                      isOpen
                        ? "border-brand-red shadow-md"
                        : "border-gray-200/80 hover:border-gray-300"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-brand-black"
                    >
                      <span className={isOpen ? "text-brand-red" : ""}>
                        {faq.q}
                      </span>
                      <FiChevronDown
                        className={`w-5 h-5 flex-shrink-0 text-gray-400 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-brand-red" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
