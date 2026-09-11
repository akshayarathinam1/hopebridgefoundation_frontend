'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { FiArrowUpRight, FiAlertTriangle, FiDollarSign } from "react-icons/fi";

const QUICK_AMOUNTS = [500, 1000, 2500, 5000];

const PAYMENT_METHODS = [
  { id: "test", label: "Test Donation" },
  { id: "offline", label: "Offline Donation" },
  { id: "card", label: "Credit Card" },
];

export default function DonationImpactCard() {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("test");

  const displayAmount = isCustom
    ? customAmount || "0"
    : selectedAmount.toLocaleString("en-IN");

  const donateHref = `/donate?amount=${isCustom ? customAmount || 0 : selectedAmount}&method=${paymentMethod}`;

  return (
    <section className="relative pt-14 pb-24 bg-white overflow-visible">
      {/* ── Absolute dark background — covers only the top ~45% ── */}
      <div className="absolute inset-x-0 top-0 h-[45%] min-h-[260px] bg-brand-black z-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=75"
          alt="Community background"
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-black/70" />
      </div>

      {/* ── Content layer ── */}
      <div className="relative z-10 container-site flex flex-col items-center">
        {/* Heading — sits in the dark zone */}
        <div className="w-full max-w-4xl mb-8">
          <SectionLabel light>Start Donating Poor People</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mt-3">
            Join The{" "}
            <span className="text-brand-red">Community</span> To Give
            <br />
            Education For Children
          </h2>
        </div>

        {/* ── White Card — centered, straddles dark/white boundary ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Left: Donation form */}
          <div className="bg-white p-8 sm:p-10 flex flex-col">
            <h3 className="text-2xl font-extrabold text-brand-black mb-6">
              Support Where It Counts.
            </h3>

            {/* Notice banner */}
            <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-7">
              <FiAlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-amber-800 leading-snug">
                <strong>Notice:</strong> Test Mode Is Enabled. While In Test
                Mode No Live Donations Are Processed.
              </p>
            </div>

            {/* Your Donation label */}
            <p className="text-sm font-bold text-brand-black mb-3">
              Your Donation:
            </p>

            {/* Amount input display */}
            <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-brand-black flex items-center justify-center flex-shrink-0">
                <FiDollarSign className="w-4 h-4 text-white" />
              </span>
              {isCustom ? (
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="flex-1 bg-transparent text-brand-black font-bold text-base outline-none"
                />
              ) : (
                <span className="flex-1 text-brand-black font-bold text-base">
                  {displayAmount}
                </span>
              )}
            </div>

            {/* Quick amount selector pills */}
            <div className="flex flex-wrap gap-2 mb-7">
              {QUICK_AMOUNTS.map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => { setSelectedAmount(amt); setIsCustom(false); }}
                  className={`px-4 py-2 rounded-full text-sm font-bold border-2 transition-all duration-200 ${
                    !isCustom && selectedAmount === amt
                      ? "bg-brand-black text-white border-brand-black"
                      : "bg-white text-brand-black border-gray-200 hover:border-brand-black"
                  }`}
                >
                  {amt.toLocaleString("en-IN")}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setIsCustom(true)}
                className={`px-4 py-2 rounded-full text-sm font-bold border-2 transition-all duration-200 ${
                  isCustom
                    ? "bg-brand-black text-white border-brand-black"
                    : "bg-white text-brand-black border-gray-200 hover:border-brand-black"
                }`}
              >
                Custom
              </button>
            </div>

            {/* Payment method */}
            <p className="text-sm font-bold text-brand-black mb-3">
              Select Payment Method
            </p>
            <div className="flex flex-wrap gap-5 mb-8">
              {PAYMENT_METHODS.map((pm) => (
                <label
                  key={pm.id}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <span
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                      paymentMethod === pm.id
                        ? "border-brand-red"
                        : "border-gray-300 group-hover:border-gray-400"
                    }`}
                  >
                    {paymentMethod === pm.id && (
                      <span className="w-2 h-2 rounded-full bg-brand-red" />
                    )}
                  </span>
                  <input
                    type="radio"
                    name="payment"
                    value={pm.id}
                    checked={paymentMethod === pm.id}
                    onChange={() => setPaymentMethod(pm.id)}
                    className="sr-only"
                  />
                  <span className="text-xs text-gray-600 font-medium">
                    {pm.label}
                  </span>
                </label>
              ))}
            </div>

            {/* Donate CTA */}
            <Link
              href={donateHref}
              className="group/cta relative overflow-hidden inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-red hover:bg-brand-red-dark text-white text-sm font-bold shadow-[0_4px_18px_rgba(211,47,47,0.4)] hover:shadow-[0_8px_25px_rgba(211,47,47,0.5)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 self-start before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/35 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700 before:ease-in-out before:pointer-events-none"
            >
              <span>Donate Now</span>
              <FiArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
            </Link>
          </div>

          {/* Right: Hero image with torn brush edge */}
          <div className="relative min-h-[340px] lg:min-h-0 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=900&q=85"
              alt="Smiling child receiving a gift from a caring elder — HopeBridge Foundation"
              fill
              className="object-cover object-center"
            />
            {/* Torn/brush stroke edge on the left */}
            <div
              className="absolute inset-y-0 left-0 w-16 z-10 pointer-events-none"
              style={{
                background: "white",
                clipPath:
                  "polygon(0 0, 60% 0, 100% 4%, 80% 9%, 100% 14%, 70% 19%, 95% 24%, 75% 30%, 100% 35%, 65% 40%, 100% 46%, 70% 52%, 100% 57%, 80% 62%, 100% 67%, 75% 72%, 95% 77%, 65% 82%, 90% 87%, 60% 92%, 100% 97%, 100% 100%, 0 100%)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}



