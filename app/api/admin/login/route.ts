import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (
    username === process.env.ADMIN_USER &&
    password === process.env.ADMIN_PASS
  ) {
    // Set a simple cookie for session
    const res = NextResponse.json({ success: true });
    res.cookies.set("admin_auth", "true", { httpOnly: true, path: "/" });
    return res;
  }

  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
