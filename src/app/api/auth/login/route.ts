import { NextRequest, NextResponse } from "next/server";
import { authenticateUser } from "@/lib/db";
import { loginValidation } from "@/lib/validators/authValidation";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.NEXTAUTH_SECRET || "secret";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validationError = loginValidation(body);
    if (validationError) return NextResponse.json({ success: false, error: validationError }, { status: 400 });

    const user = await authenticateUser(body.email, body.password);
    if (!user) return NextResponse.json({ success: false, error: "Invalid credentials" }, { status: 401 });

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "7d" });

    return NextResponse.json({ success: true, message: "Login successful", jwtToken: token, name: user.name });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
