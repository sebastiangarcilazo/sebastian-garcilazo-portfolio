import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    await connectDB();
    const userExist = await User.findOne({ email });
    if (userExist) {
      return NextResponse.json({ error: "El usuario ya existe" }, { status: 400 });
    }

    const hashed = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashed });
    await newUser.save();

    return NextResponse.json({ message: "Usuario registrado con éxito" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error en el registro" }, { status: 500 });
  }
}
