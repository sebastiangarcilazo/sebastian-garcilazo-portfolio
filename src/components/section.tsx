"use client";

import { motion } from "framer-motion";

export default function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id: string;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 py-16 sm:py-20 border-b border-black-200/80 last:border-b-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.45 }}
      >
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.18em] text-sky-500 mb-2">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4 text-black-900">
          {title}
        </h2>
        <div className="text-sm sm:text-base text-black-800 leading-relaxed space-y-3">
          {children}
        </div>
      </motion.div>
    </section>
  );
}


