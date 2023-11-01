"use client";

import { useState } from "react";
import { useUser } from "../_hooks";

/**
 * Check cookies to see if bday.sid exists
 * If it exists, check if it's valid - api/auth/getCurrentUser
 * If getCurrentUser returns a user, set user state to that user
 * If getCurrentUser returns an error or null,
 *    set user state to null, redirect to login
 */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userSession, setUserSession] = useState<{}>({});
  const { user, isLoading, isError } = useUser();
  console.log('user is: ', user);

  // if (isLoading) return spinner
  // if (isErorr) return redirect to login
  // implement state manager to store user state

  return <>{children}</>;
}
