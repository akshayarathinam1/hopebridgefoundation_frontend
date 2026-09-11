'use client';

import { motion } from "framer-motion";
import { FiUsers, FiHeart, FiSmile, FiAward } from "react-icons/fi";

const stats = [
  {
    number: "5,000+",
    label: "Total Lives Touched",
    subtext: "Across education & healthcare",
    icon: FiHeart,
  },
  {
    number: "₹50L+",
    label: "Total Funds Raised",
    subtext: "Directly deployed for causes",
    icon: FiAward,
  },
  {
    number: "250+",
    label: "Dedicated Volunteers",
    subtext: "Selfless hearts on the ground",
    icon: FiUsers,
  },
  {
    number: "8+",
    label: "Years of Service",
    subtext: "Serving communities since 2016",
    icon: FiSmile,
  },
];

export default function ImpactCounter() {
  return (
    <section className="py-16 bg-white border-y border-gray-100 relative">
      <div className="container-site">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-red-light/60 flex items-center justify-center text-brand-red mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-black tracking-tight mb-1 group-hover:text-brand-red transition-colors">
                  {stat.number}
                </h3>
                <p className="text-sm font-bold text-gray-800 mb-0.5">
                  {stat.label}
                </p>
                <p className="text-xs text-gray-400 font-medium max-w-[180px]">
                  {stat.subtext}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
