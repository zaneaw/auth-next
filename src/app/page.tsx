"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between gap-4 p-24">
      <Link href={"/login"}>LOGIN</Link>
      <Link href={"/signup"}>SIGNUP</Link>
    </main>
  );
}
