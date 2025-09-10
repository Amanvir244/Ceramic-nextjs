import { NextRequest, NextResponse } from "next/server";
import { createUser } from "@/lib/db";
import { signupValidation } from "@/lib/validators/authValidation";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validationError = signupValidation(body);
    if (validationError) return NextResponse.json({ success: false, error: validationError }, { status: 400 });

    const user = await createUser(body);
    return NextResponse.json({ success: true, message: "Signup successful", user });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
