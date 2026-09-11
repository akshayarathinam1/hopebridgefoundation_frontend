'use client';

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import {
  FiBookOpen,
  FiHome,
  FiHeart,
  FiActivity,
  FiUsers,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";

const services = [
  {
    id: "education",
    icon: FiBookOpen,
    emoji: "🎓",
    title: "Education",
    description:
      "We help children and young people access educational opportunities, learning resources, and the support they need to build a better future.",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80",
    imageAlt: "Children learning and reading in school",
    iconColor: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    id: "child-care",
    icon: FiHome,
    emoji: "🏠",
    title: "Child & Orphan Care",
    description:
      "We support children who need care, protection, education, and a safe environment to grow with confidence and dignity.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
    imageAlt: "Smiling children receiving warm community support",
    iconColor: "text-teal-600",
    bgColor: "bg-teal-50",
  },
  {
    id: "senior-care",
    icon: FiHeart,
    emoji: "👵",
    title: "Senior Citizen Care",
    description:
      "We provide support and care for elderly people, helping them live with dignity, comfort, and companionship.",
    image:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80",
    imageAlt: "Caring hands supporting an elderly woman with warmth",
    iconColor: "text-brand-red",
    bgColor: "bg-brand-red-light",
  },
  {
    id: "medical-support",
    icon: FiActivity,
    emoji: "🏥",
    title: "Medical Support",
    description:
      "We help individuals and families facing medical challenges by supporting essential healthcare and medical needs.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    imageAlt: "Healthcare worker offering checkup at rural camp",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: "social-service",
    icon: FiUsers,
    emoji: "🤝",
    title: "Social Service",
    description:
      "We work with communities to respond to essential needs and support people facing difficult circumstances.",
    image:
      "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=600&q=80",
    imageAlt: "Community aid and relief distribution",
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
];

export default function HowWeHelp() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -310, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 310, behavior: "smooth" });
    }
  };

  return (
    <section id="how-we-help" className="bg-gray-50/70 py-20 overflow-hidden">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* ── Left Column: Header, Nav Arrows, Scrollable 5 Cards & CTA ── */}
          <div className="lg:col-span-8 flex flex-col min-w-0">
            {/* Header + Nav Arrows Row */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div className="max-w-xl">
                <SectionLabel>How We Help</SectionLabel>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-black tracking-tight mt-1 mb-3">
                  Turning Compassion Into Action
                </h2>
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                  We focus on areas where support can create a meaningful and lasting impact.
                </p>
              </div>

              {/* Prev / Next arrows to scroll left side cards */}
              <div className="flex items-center gap-3 self-start sm:self-end flex-shrink-0">
                <button
                  onClick={scrollLeft}
                  aria-label="Scroll left"
                  className="group/prev w-11 h-11 rounded-full bg-white hover:bg-brand-red hover:text-white text-brand-black flex items-center justify-center transition-all duration-300 border border-gray-200 hover:border-brand-red hover:-translate-x-1 active:-translate-x-2 shadow-sm"
                >
                  <FiArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover/prev:-translate-x-0.5" />
                </button>
                <button
                  onClick={scrollRight}
                  aria-label="Scroll right"
                  className="group/next w-11 h-11 rounded-full bg-brand-red text-white hover:bg-brand-red-dark flex items-center justify-center transition-all duration-300 hover:translate-x-1 active:translate-x-2 shadow-md hover:shadow-lg"
                >
                  <FiArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/next:translate-x-0.5" />
                </button>
              </div>
            </div>

            {/* ── Horizontal Scrollable Cards Track ── */}
            <div
              ref={scrollRef}
              className="flex gap-5 overflow-x-auto scroll-smooth pb-6 pt-1 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-2 px-2"
            >
              {services.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="w-[260px] sm:w-[280px] flex-shrink-0 snap-start rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between overflow-hidden"
                  >
                    {/* Image */}
                    <div className="relative h-40 w-full overflow-hidden bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(max-width: 640px) 260px, 280px"
                        className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 text-lg bg-white/90 backdrop-blur-md w-8 h-8 rounded-full flex items-center justify-center shadow-sm">
                        {item.emoji}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div
                          className={`w-10 h-10 -mt-10 relative z-10 rounded-xl ${item.bgColor} ${item.iconColor} shadow-md flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <h3 className="text-base font-bold text-brand-black mb-2 group-hover:text-brand-red transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button below cards */}
            <div className="mt-4">
              <Button href="/programs" size="md" variant="primary">
                <span>See How We Make a Difference</span>
                <FiArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* ── Right Column: Humanitarian Relief In Action (Sticky / Still) ── */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto max-w-sm lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] group bg-gray-100"
            >
              <Image
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=85"
                alt="Volunteers distributing emergency food rations, nutrition and relief supplies"
                fill
                sizes="(max-width: 1024px) 380px, 400px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 via-brand-black/25 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-brand-red text-white text-[11px] font-bold uppercase tracking-wider mb-2.5 shadow-sm">
                  Direct Grassroots Relief
                </span>
                <h4 className="text-base sm:text-lg font-bold leading-snug text-white mb-1">
                  Safe Water, Nutrition &amp; Lifesaving Protection
                </h4>
                <p className="text-xs text-gray-200/90 leading-relaxed">
                  Delivering daily food kits, schooling aid, and elderly companionship directly where it matters most.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
