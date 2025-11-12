import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function GET() {
  try {
    // Intentar conectar
    const db = await connectDB();

    // Intentar contar usuarios existentes (si hay alguno)
    const count = await User.countDocuments();

    return NextResponse.json({
      message: "✅ Conectado correctamente a MongoDB",
      usersInCollection: count,
    });
  } catch (error) {
    console.error("❌ Error al conectar con MongoDB:", error);
    return NextResponse.json(
      { message: "❌ Error al conectar con MongoDB", error: String(error) },
      { status: 500 }
    );
  }
}