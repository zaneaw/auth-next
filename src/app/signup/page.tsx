"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Signup() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    username: "test user",
    email: "testuser@mail.com",
    password: "password",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async () => {
    setIsLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
      credentials: "include",
    });
    const data = await res.json();
    if (res.ok) {
      console.log("data is ok! ", data);
    }
    console.log("data is NOT ok! ", data);
    setIsLoading(false);
  };

  return (
    <>
      <Link href={"/login"}>LOGIN</Link>
      <div className="w-100vw flex items-center justify-center pb-12 pt-4">
        Signup
      </div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-center gap-4 text-black"
      >
        <input
          className="w-[50vw] min-w-[180px] max-w-[400px] rounded border px-2 py-2"
          name="username"
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          className="w-[50vw] min-w-[180px] max-w-[400px] rounded border px-2 py-2"
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="w-[50vw] min-w-[180px] max-w-[400px] rounded border px-2 py-2"
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="rounded border-2 bg-slate-700 px-4 py-2 text-white"
        >
          Signup
        </button>
      </form>
    </>
  );
}
