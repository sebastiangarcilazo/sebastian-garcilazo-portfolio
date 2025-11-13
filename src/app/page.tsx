"use client";

import Section from "@/components/section";
import ProjectsGrid from "@/components/projectsgrid";
import Footer from "@/components/footer";
import Balancer from "react-wrap-balancer";
import RegisterForm from "@/components/registerform";
import TextType from '@/components/textype';

export default function Page() {
  return (
    <>
      {/* HOME */}
      
    
      
        <TextType 
        text={[
    "Welcome to my Portfolio",
    "Sebastian Garcilazo",
    "Full Stack Developer",
        ]}
      className="text-5xl sm:text-6xl font-bold leading-tight"
      typingSpeed={60}
        pauseDuration={1400}
      />
      <Section
        id="home"
        eyebrow="Bienvenido"
        title="Sebastián Garcilazo — Desarrollador en formación"
      > 
        <p>
          Tengo 19 años y estudio Analista de Sistemas. Me enfoco en desarrollo web
          moderno usando Next.js, React, TypeScript, Tailwind CSS y MongoDB, combinando
          lógica con diseño y experiencia de usuario.
        </p>
        <p>
          Me interesa crear interfaces limpias, animadas y profesionales, y seguir
          creciendo tanto en el lado técnico como en el creativo.
        </p>
      </Section>

      {/* REGISTRO */}
      <Section
        id="register"
        eyebrow="Autenticación"
        title="Registro de usuarios"
      >
        <p>
          En esta sección vas a poder implementar tu formulario de registro real.
          Podés conectarlo a tus API Routes, validar datos y guardar usuarios en MongoDB.
        </p>
        <p>
          Por ahora, este bloque funciona como ancla para el scroll y demostración de
          estructura.
        </p>
      </Section>

      {/* LOGIN */}
      <Section
        id="login"
        eyebrow="Acceso"
        title="Login"
      >
        <p>
          Esta área está pensada para tu formulario de inicio de sesión. Podés integrar
          JWT, sesiones o cualquier estrategia de autenticación que elijas.
        </p>
        <p>
          Más adelante, podés mostrar estados de error, feedback visual y redirecciones
          al dashboard.
        </p>
      </Section>
      <Section id="register" eyebrow="Autenticación" title="Registrarte">
  <p className="mb-4">
    Probá este formulario con validación real del lado del cliente.
  </p>
  <RegisterForm />
</Section>
      {/* PROYECTOS */}
      <Section
        id="projects"
        eyebrow="Trabajo"
        title="Mis proyectos"
      >
        <p className="mb-4">
          Algunos proyectos que representan mi stack actual y mi forma de trabajar.
        </p>
        <ProjectsGrid />
      </Section>

      {/* SOBRE MÍ */}
      <Section
        id="about"
        eyebrow="Perfil"
        title="Sobre mí"
      >
        <p>
          Soy Sebastián, estudiante de Analista de Sistemas con interés en desarrollo
          web, UX/UI y herramientas creativas como Photoshop y After Effects.
        </p>
        <p>
          Actualmente estoy profundizando en Next.js, React, TypeScript, Tailwind CSS,
          MongoDB, Go y desarrollo móvil con Android Studio, con la meta de obtener mi
          primera experiencia profesional en IT.
        </p>
      </Section>

      <Footer />
    </>
  );
}
