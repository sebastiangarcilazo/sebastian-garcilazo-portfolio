"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type NavItem = {
  id: string;
  label: string;
};

const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "register", label: "Registrarte" },
  { id: "login", label: "Login" },
  { id: "projects", label: "Mis proyectos" },
  { id: "about", label: "Sobre mí" },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll + calcular sección activa
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      const offsetFromTop = 120; // referencia de “sección activa”
      let currentId = navItems[0].id;
      let smallestDelta = Number.POSITIVE_INFINITY;

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const delta = Math.abs(rect.top - offsetFromTop);

        if (delta < smallestDelta) {
          smallestDelta = delta;
          currentId = item.id;
        }
      }

      setActive(currentId);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 90;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    setActive(id);
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="fixed top-4 z-50 flex w-full justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -18, opacity: 0, scale: 0.97 }}
        animate={{
          y: 0,
          opacity: 1,
          scale: scrolled ? 0.99 : 1,
          boxShadow: scrolled
            ? "0 14px 38px rgba(0,0,0,0.16)"
            : "0 24px 60px rgba(0,0,0,0.22)",
        }}
        transition={{ duration: 0.4, type: "spring", stiffness: 260, damping: 24 }}
        className="pointer-events-auto cursor-none relative flex items-center rounded-full bg-white/95 border border-neutral-200/90 px-4 sm:px-6 py-2.5 sm:py-3 backdrop-blur-xl"
      >
        {/* Línea superior sutil */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-[1px] left-6 right-6 h-px bg-gradient-to-r from-black/0 via-black/40 to-black/0"
          initial={{ opacity: 0, scaleX: 0.5 }}
          animate={{ opacity: 0.5, scaleX: scrolled ? 1 : 0.7 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        {/* Barra subrayado global (pista) */}
        <div className="absolute bottom-1 left-5 right-5 h-px bg-neutral-200/80" />

        <NavList active={active} onItemClick={handleScroll} />
      </motion.nav>
    </div>
  );
}

function NavList({
  active,
  onItemClick,
}: {
  active: string;
  onItemClick: (id: string) => void;
}) {
  return (
    <ul className="relative flex items-center gap-1.5 sm:gap-3 text-xs sm:text-sm font-medium cursor-none">
      {/* Subrayado deslizante del item activo */}
      <motion.div
        layoutId="nav-underline-bar"
        className="absolute bottom-1 h-[2px] rounded-full bg-black"
        transition={{ type: "spring", stiffness: 440, damping: 30, mass: 0.7 }}
        style={{
          // El tamaño y posición se actualizan usando un span invisible de referencia
        }}
      />
      {navItems.map((item, index) => (
        <NavItem
          key={item.id}
          item={item}
          active={active === item.id}
          onClick={() => onItemClick(item.id)}
          index={index}
        />
      ))}
    </ul>
  );
}

function NavItem({
  item,
  active,
  onClick,
  index,
}: {
  item: NavItem;
  active: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <li className="relative">
      {/* Pastilla gris muy suave para activo */}
      {active && (
        <motion.span
          layoutId="nav-pill-bg"
          className="absolute inset-0 rounded-full bg-neutral-900/3"
          transition={{
            type: "spring",
            stiffness: 430,
            damping: 30,
            mass: 0.7,
          }}
        />
      )}

      <motion.button
        type="button"
        onClick={onClick}
        className="relative z-10 flex items-center gap-2 px-3 py-1.5 sm:px-4 rounded-full cursor-none select-none"
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.35,
          delay: 0.03 + index * 0.03,
          type: "spring",
          stiffness: 360,
          damping: 26,
        }}
        whileHover={{
          y: -1,
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.96,
          y: 0,
        }}
      >
        {/* Bullet minimal */}
        <span
          className={`h-1.5 w-1.5 rounded-full transition-colors ${
            active ? "bg-black" : "bg-neutral-300"
          }`}
        />
        <span
          className={`text-[0.8rem] sm:text-xs tracking-tight transition-all ${
            active
              ? "text-black font-semibold"
              : "text-neutral-600 group-hover:text-neutral-800"
          }`}
        >
          {item.label}
        </span>
      </motion.button>
    </li>
  );
}

