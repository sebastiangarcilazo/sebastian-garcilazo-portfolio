"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        ¡Portfolio de Sebastián! 🚀
      </motion.h1>
    </main>
  );
}
