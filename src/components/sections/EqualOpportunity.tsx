'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";

export default function EqualOpportunity() {
  return (
    <section className="py-20 bg-gray-50/60 overflow-hidden">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Stacked / Layered Photo Cards matching KidHope design */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Back tilted image */}
              <div className="relative w-full h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500 border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=800&q=85"
                  alt="Child drinking clean water from tap"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating secondary badge card */}
              <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:-right-6 bg-white rounded-2xl p-5 shadow-xl border border-gray-100 max-w-xs z-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-sm">
                    ✓
                  </span>
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase">
                      Direct Verification
                    </p>
                    <p className="text-sm font-bold text-brand-black">
                      100% Transparent
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 leading-snug">
                  Every rupee is audited and directly deployed to grassroots relief.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copy + Checkpoints + CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <SectionLabel>Gift of Hope · ₹500 / Month</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-black tracking-tight mb-6 leading-tight">
              All Children Deserve An{" "}
              <span className="text-brand-red">Equal Opportunity</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Your monthly gift of ₹500 ensures that children living in poverty
              have access to life-changing benefits like medical care,
              educational support, life skills, and daily warm meals.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
              HopeBridge bridges the disparity gap by equipping government school
              children with modern STEM labs, uniform kits, digital literacy, and
              certified mentors.
            </p>

            {/* Feature Checklist */}
            <div className="space-y-3 mb-8">
              {[
                "Full tuition sponsorship and school supplies",
                "Daily clean drinking water and nutrition kits",
                "Comprehensive pediatric health and eye checkups",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <FiCheckCircle className="w-5 h-5 text-brand-red flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Button href="/donate" size="lg" variant="primary">
                <span>Donate Now</span>
                <FiArrowUpRight className="w-5 h-5" aria-hidden="true" />
              </Button>
              <Button href="/programs" size="lg" variant="outline">
                Our Programs
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
