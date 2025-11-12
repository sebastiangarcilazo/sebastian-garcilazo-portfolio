"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); setErr(null);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error");
      router.push("/dashboard");
    } catch (e: any) {
      setErr(e.message);
    } finally { setLoading(false); }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <form onSubmit={onSubmit} className="w-full max-w-md space-y-4 bg-gray-900 p-6 rounded-2xl shadow">
        <h1 className="text-2xl font-bold">Iniciar sesión</h1>
        {err && <p className="text-red-400">{err}</p>}
        <input className="w-full p-3 rounded bg-gray-800" placeholder="Email" type="email"
          value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/>
        <input className="w-full p-3 rounded bg-gray-800" placeholder="Contraseña" type="password"
          value={form.password} onChange={e=>setForm({...form, password:e.target.value})}/>
        <button disabled={loading} className="w-full py-3 rounded bg-indigo-600 hover:bg-indigo-500 font-semibold">
          {loading ? "Ingresando..." : "Entrar"}
        </button>
      </form>
    </main>
  );
}
