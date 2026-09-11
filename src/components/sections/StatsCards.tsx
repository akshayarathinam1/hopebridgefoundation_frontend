'use client';

import { motion } from "framer-motion";

const stats = [
  {
    number: "8+",
    title: "YEARS OF SERVICE",
    description:
      "Central to our foundation's ethos is an unwavering commitment to long-term grassroots upliftment and human dignity.",
  },
  {
    number: "120+",
    title: "COMMUNITY PROJECTS COMPLETED",
    description:
      "Empowering rural classrooms, hunger relief drives, elderly hospice care, and clean water stations across districts.",
  },
  {
    number: "250+",
    title: "ACTIVE VOLUNTEERS & CAREGIVERS",
    description:
      "Dedicated change-makers, medical professionals, and local youth standing together to build hope on the ground.",
  },
];

export default function StatsCards() {
  return (
    <section className="py-12 md:py-16 bg-gray-50/70">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-black group-hover:text-brand-red transition-colors duration-300 tracking-tight block mb-2">
                  {stat.number}
                </span>
                <h3 className="text-xs sm:text-[13px] font-bold tracking-widest text-brand-red uppercase mb-3">
                  {stat.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
