'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { FiArrowUpRight, FiHeart } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-brand-black"
    >
      {/* High Impact Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=85"
          alt="Happy children smiling and reaching out together"
          fill
          className="object-cover object-center opacity-75"
          priority
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/95 via-brand-black/75 to-brand-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container-site pt-36 pb-28 md:pt-40 md:pb-36">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            <span>Non-Profit Charity · HopeBridge Foundation</span>
          </motion.div>

          {/* Main Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6"
          >
            Give Hope. Create Change.{" "}
            <span className="relative inline-block text-white">
              Transform Lives.
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-brand-red"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 9C70 3 200 3 298 9"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl mb-10 font-normal"
          >
            Every act of kindness has the power to change a life. We work to support children, senior citizens, families, and communities through education, healthcare, care, and social service.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 sm:gap-5"
          >
            <Button href="/donate" size="lg" variant="primary">
              <span>Donate Now</span>
              <FiArrowUpRight className="w-5 h-5" aria-hidden="true" />
            </Button>

            <Button href="/get-involved" size="lg" variant="outline-white">
              <span>Join Our Mission</span>
              <FiArrowUpRight className="w-5 h-5" aria-hidden="true" />
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
