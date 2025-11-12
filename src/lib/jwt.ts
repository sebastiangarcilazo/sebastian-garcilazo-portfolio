import { sign, verify, type SignOptions, type Secret, type JwtPayload } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;
if (!JWT_SECRET) {
  throw new Error("⚠️ Falta JWT_SECRET en .env.local");
}

export type JWTPayload = {
  id: string;
  name: string;
  email: string;
};

export function signToken(
  payload: JWTPayload,
  expiresIn: SignOptions["expiresIn"] = "7d"
) {
  // el secret debe ser del tipo Secret
  return sign(payload, JWT_SECRET as Secret, { expiresIn } as SignOptions);
}

export function verifyToken(token: string): JWTPayload {
  // verify devuelve string | JwtPayload; casteamos a nuestro payload
  const decoded = verify(token, JWT_SECRET as Secret) as JwtPayload | string;
  if (typeof decoded === "string") {
    throw new Error("Token inválido");
  }
  // mapeamos a nuestro tipo si hace falta
  const { id, name, email } = decoded as unknown as JWTPayload;
  return { id, name, email };
}
