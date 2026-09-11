'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { FiHeart, FiGift, FiCheckCircle, FiPhone } from "react-icons/fi";

const features = [
  {
    icon: FiHeart,
    title: "Start Helping Them",
    desc: "Join our volunteers and directly uplift lives through community-driven programs.",
  },
  {
    icon: FiGift,
    title: "Make Donations",
    desc: "Every rupee you give is transparently deployed to empower those in need.",
  },
];

const bullets = [
  "Helped Fund 3,265 Projects for the Poor",
  "We Give Every Child a Gift of Education",
  "We Help Companies Develop Powerful CSR Initiatives",
];

export default function AboutSection() {
  return (
      <section id="about" className="py-20 bg-white overflow-hidden">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ── LEFT: Layered photo collage ── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="relative h-[520px] w-full hidden lg:block"
            >
              {/* Vertical dark brand banner strip */}
              <div className="absolute left-0 top-0 bottom-0 w-[190px] bg-brand-black rounded-2xl overflow-hidden z-0">
                <Image
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80"
                  alt="Children in community"
                  fill
                  className="object-cover opacity-35"
                />
                {/* Vertical rotated text at bottom */}
                <div className="absolute bottom-0 left-0 right-0 z-10 pb-8 flex justify-center">
                  <p
                    className="text-white text-[13px] font-semibold tracking-widest uppercase whitespace-nowrap"
                    style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}
                  >
                    We give{" "}
                    <span className="text-brand-red font-extrabold">donations</span>{" "}
                    to poor people
                  </p>
                </div>
              </div>

              {/* Top-center photo */}
              <div className="absolute left-[158px] top-0 w-[220px] h-[175px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10">
                <Image
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=500&q=80"
                  alt="Children smiling and eating"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Center photo */}
              <div className="absolute left-[158px] top-[144px] w-[220px] h-[235px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10 group">
                <Image
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80"
                  alt="Volunteers helping children"
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Bottom-right photo */}
              <div className="absolute right-0 bottom-0 w-[205px] h-[215px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80"
                  alt="Elder care and medical assistance"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Decorative wavy accent */}
              <div className="absolute top-[-10px] right-[120px] z-20 pointer-events-none">
                <svg width="100" height="30" viewBox="0 0 100 30" fill="none">
                  <path
                    d="M2 15 C14 4 24 26 36 15 C48 4 58 26 70 15 C82 4 92 26 98 15"
                    stroke="#D32F2F"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Floating stat badge */}
              <div className="absolute left-[390px] top-[230px] z-20 bg-white rounded-2xl shadow-2xl border border-gray-100 px-5 py-4 min-w-[130px]">
                <p className="text-3xl font-extrabold text-brand-black leading-none">8+</p>
                <p className="text-xs text-gray-500 font-medium mt-1">Years of Impact</p>
              </div>
            </motion.div>

            {/* ── RIGHT: Text content ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-col"
            >
              <SectionLabel>Start Donating to Poor People</SectionLabel>

              <h2 className="text-4xl sm:text-5xl font-extrabold leading-[1.08] tracking-tight text-brand-black mb-5">
                Helping Each Other Can Make{" "}
                <span className="text-brand-red">World</span> Better
              </h2>

              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
                Volunteering offers opportunities to develop new skills and gain
                valuable experience. This can include leadership, communication,
                project management, and teamwork skills.
              </p>

              {/* Two feature cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="flex items-start gap-3 p-4 rounded-xl bg-brand-red-light border border-brand-red/10 hover:border-brand-red/30 transition-all duration-200"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-red flex items-center justify-center shadow-md">
                      <f.icon className="w-4 h-4 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-brand-black mb-1">
                        {f.title}
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bullet checkpoints */}
              <ul className="space-y-3 mb-10">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-red flex items-center justify-center">
                      <FiCheckCircle className="w-3 h-3 text-white" strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* CTA row */}
              <div className="flex flex-wrap items-center gap-6">
                <Button href="/about" size="lg">
                  More About Us
                </Button>

                <a
                  href="tel:+9112345678922"
                  className="inline-flex items-center gap-3 group"
                >
                  <span className="w-11 h-11 rounded-full border-2 border-brand-red/30 group-hover:border-brand-red flex items-center justify-center transition-colors duration-200">
                    <FiPhone className="w-4 h-4 text-brand-red" />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                      Phone
                    </p>
                    <p className="text-sm font-bold text-brand-black group-hover:text-brand-red transition-colors duration-200">
                      +91 12345 67890
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
}

