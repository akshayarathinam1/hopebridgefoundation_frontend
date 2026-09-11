'use client';

import { motion } from "framer-motion";

interface ProgressBarProps {
  percentage: number;
  raised?: string;
  goal?: string;
  barColor?: string;
  className?: string;
  showLabels?: boolean;
}

export default function ProgressBar({
  percentage,
  raised,
  goal,
  barColor = "bg-brand-red",
  className = "",
  showLabels = true,
}: ProgressBarProps) {
  const clamped = Math.min(Math.max(percentage, 0), 100);

  return (
    <div className={`w-full ${className}`}>
      {showLabels && (
        <div className="flex items-center justify-between text-xs font-semibold mb-1.5 text-gray-500">
          {raised && (
            <span>
              Raised: <strong className="text-brand-black">{raised}</strong>
            </span>
          )}
          <span className="text-brand-red font-bold">{clamped}%</span>
          {goal && (
            <span>
              Goal: <strong className="text-brand-black">{goal}</strong>
            </span>
          )}
        </div>
      )}
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${clamped}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`h-full rounded-full ${barColor}`}
        />
      </div>
    </div>
  );
}
