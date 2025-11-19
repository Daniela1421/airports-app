import { NextResponse } from "next/server";

export function middleware(req: Request) {
  const url = req.url;
  const res = NextResponse.next();
  res.headers.set("x-url", url);
  return res;
}
