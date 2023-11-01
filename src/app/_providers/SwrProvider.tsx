"use client";

import { SWRConfig } from "swr";

export const SWRProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, {
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            ...init,
          }).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
};
