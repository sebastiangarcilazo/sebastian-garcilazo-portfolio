"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); setErr(null); setMsg(null);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error");
      setMsg("Usuario registrado con éxito. Ya podés iniciar sesión.");
      setForm({ name: "", email: "", password: "" });
    } catch (e: any) {
      setErr(e.message);
    } finally { setLoading(false); }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <form onSubmit={onSubmit} className="w-full max-w-md space-y-4 bg-gray-900 p-6 rounded-2xl shadow">
        <h1 className="text-2xl font-bold">Crear cuenta</h1>
        {msg && <p className="text-green-400">{msg}</p>}
        {err && <p className="text-red-400">{err}</p>}
        <input className="w-full p-3 rounded bg-gray-800" placeholder="Nombre"
          value={form.name} onChange={e=>setForm({...form, name:e.target.value})}/>
        <input className="w-full p-3 rounded bg-gray-800" placeholder="Email" type="email"
          value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/>
        <input className="w-full p-3 rounded bg-gray-800" placeholder="Contraseña" type="password"
          value={form.password} onChange={e=>setForm({...form, password:e.target.value})}/>
        <button disabled={loading} className="w-full py-3 rounded bg-indigo-600 hover:bg-indigo-500 font-semibold">
          {loading ? "Creando..." : "Registrarme"}
        </button>
      </form>
    </main>
  );
}