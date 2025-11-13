"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Next.js",
    tech: "Next.js · TypeScript · Tailwind · Framer Motion",
    desc: "Sitio personal de una sola página con animaciones y diseño moderno.",
  },
  {
    title: "API con MongoDB",
    tech: "Next.js API Routes · MongoDB",
    desc: "Endpoints para registro y login de usuarios con base de datos.",
  },
  {
    title: "UI Components",
    tech: "React · Tailwind",
    desc: "Colección de botones, cards y layouts reutilizables.",
  },
];

export default function ProjectsGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {projects.map((p, i) => (
        <motion.article
          key={p.title}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: i * 0.06, duration: 0.4 }}
          className="rounded-2xl border border-black-200 p-5 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-sky-400/70 transition"
        >
          <h3 className="text-lg font-semibold mb-1.5 text-black-900">
            {p.title}
          </h3>
          <p className="text-xs text-sky-600 mb-2">{p.tech}</p>
          <p className="text-sm text-black-700">{p.desc}</p>
        </motion.article>
      ))}
    </div>
  );
}


