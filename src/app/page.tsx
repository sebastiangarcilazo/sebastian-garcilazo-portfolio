'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-950 text-white">
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Sebastián Garcilazo — Portfolio
      </motion.h1>
    </main>
  );
}