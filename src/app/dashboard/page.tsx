import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/jwt";

export default async function DashboardPage() {
  const cookieStore = await cookies();               // 👈 await
  const token = cookieStore.get("token")?.value;     // 👈 ahora sí tiene .get

  if (!token) redirect("/login");

  try {
    const payload = verifyToken(token);              // tu verifyToken puede ser sync
    const user = { name: payload.name, email: payload.email };

    return (
      <main className="min-h-screen bg-gray-950 text-white p-10">
        <h1 className="text-3xl font-bold">Hola, {user.name} 👋</h1>
        <p className="text-gray-400 mt-2">Email: {user.email}</p>

        <form action="/api/logout" method="POST" className="mt-6">
          <button className="px-4 py-2 rounded bg-rose-600 hover:bg-rose-500">
            Cerrar sesión
          </button>
        </form>
      </main>
    );
  } catch {
    redirect("/login");
  }
}
