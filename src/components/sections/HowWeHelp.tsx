'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import { FiDroplet, FiActivity, FiUsers } from "react-icons/fi";

const services = [
  {
    icon: FiDroplet,
    title: "Clean Water & Nutrition",
    description:
      "Installing deep borewells and daily safe drinking water stations for remote schools and rural settlements.",
    image:
      "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=600&q=80",
    imageAlt: "Child drinking fresh clean water from a community tap",
    iconColor: "text-teal-600",
    bgColor: "bg-teal-50",
  },
  {
    icon: FiActivity,
    title: "Global Health & Aid",
    description:
      "Conducting comprehensive free medical checkups, eye surgery camps, and distributing life-saving medications.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    imageAlt: "Medical healthcare worker providing checkup and patient care",
    iconColor: "text-brand-red",
    bgColor: "bg-brand-red-light",
  },
  {
    icon: FiUsers,
    title: "Orphan & Elder Care",
    description:
      "Safe shelter, nutritious hot meals, educational mentoring, and dignified hospice care for senior citizens.",
    image:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80",
    imageAlt: "Caring hands supporting elderly and vulnerable residents",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
];

export default function HowWeHelp() {
  return (
    <section
      id="how-we-help"
      className="bg-gray-50/70 py-20"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading + 3 Feature Cards */}
          <div className="lg:col-span-8">
            <SectionLabel>How We Help</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-black tracking-tight mb-12">
              Safe Water, Nutrition &amp; Lifesaving Protection
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {services.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="rounded-2xl bg-gray-50/80 hover:bg-white border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between overflow-hidden"
                  >
                    <div className="relative h-36 w-full overflow-hidden bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div
                          className={`w-11 h-11 -mt-10 relative z-10 rounded-xl ${item.bgColor} ${item.iconColor} shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <h3 className="text-base font-bold text-brand-black mb-2.5 group-hover:text-brand-red transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-500 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Humanitarian Relief In Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] group bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=85"
                alt="Volunteers distributing emergency food rations, nutrition and relief supplies"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/75 via-brand-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="inline-block px-2.5 py-1 rounded-full bg-brand-red text-white text-[11px] font-bold uppercase tracking-wider mb-2">
                  Direct Grassroots Relief
                </span>
                <p className="text-sm sm:text-base font-bold leading-snug text-white">
                  Delivering clean water, daily meals &amp; urgent medical aid directly to communities in need.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
