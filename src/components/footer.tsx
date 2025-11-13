import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-10 pt-8 border-t border-slate-200/90 text-xs text-black-500 flex flex-col sm:flex-row items-center justify-between gap-2 cursor-none">
      <p>© {new Date().getFullYear()} Sebastián Garcilazo.</p>
      <div className="flex items-center gap-3">
        <a href="https://github.com/sebastiangarcilazo" target="_blank" className="hover:text-slate-900">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/sebastian-garcilazo/" target="_blank" className="hover:text-slate-900">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="mailto:sebastiangarcilazo.dev@gmail.com?subject=Consulta" className="hover:text-slate-900">
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}

