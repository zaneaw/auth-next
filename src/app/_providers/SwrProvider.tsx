"use client";

import { SWRConfig } from "swr";

export const SWRProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, { credentials: "include" }).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
};
