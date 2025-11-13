import "./globals.css";
import Navbar from "@/components/navbar";
import CustomCursor from "@/components/customcursor";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

// ✅ Cargamos Outfit (sin variables, simple)
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // puedes ajustar
});

export const metadata: Metadata = {
  title: "Sebastián Garcilazo — Portfolio",
  description: "Portfolio personal con Next.js, React, TypeScript y Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      {/* 👇 outfit.className aplica la fuente a TODO lo que haya dentro de body */}
      <body
  className={`${outfit.className} bg-white text-black antialiased cursor-none`}
  style={{ backgroundImage: "url('/bg.jpg')" }}
>
        {/* Fondo claro con gradientes suaves */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-300/30 via-violet-300/25 to-emerald-300/25 blur-3xl" />
          <div className="absolute top-1/3 -left-40 h-72 w-[40rem] rounded-full bg-gradient-to-br from-cyan-300/20 to-blue-300/25 blur-3xl" />
          <div className="absolute bottom-[-6rem] right-[-6rem] h-80 w-[50rem] rounded-full bg-gradient-to-tr from-rose-300/25 to-amber-300/25 blur-3xl" />
        </div>

        <Navbar />
        <CustomCursor />

        <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          {children}
        </main>
      </body>
    </html>
  );
}


