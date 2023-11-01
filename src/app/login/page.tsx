"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useUser } from "../_hooks";

// type Props = {
//   isAuthenticated: boolean;
//   setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
//   setUser: React.Dispatch<React.SetStateAction<{}>>;
// };

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    username: "test user",
    email: "testuser@mail.com",
    password: "password",
  });

  const testData = async () => {
    const res = await fetch("/api/auth/test", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    const data = await res.json();
    console.log("data is: ", data);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async () => {
    setIsLoading(true);
    // const { data, error, isLoading } = useSWR('/api/user/login');
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
      credentials: "include",
    });
    if (res.ok) {
      console.log("data is ok! ", data);
    }
    console.log("data is NOT ok! ", data);
    setIsLoading(false);
  };

  return (
    <>
      <Link href={"/signup"}>SIGNUP</Link>
      <div className="w-100vw flex flex-col items-center justify-center pb-12 pt-4">
        Login
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
          Login
        </button>
      </form>
      <button
        className="rounded border-2 bg-slate-700 px-4 py-2 text-white"
        onClick={testData}
      >
        Test Data Returned
      </button>
    </>
  );
}
