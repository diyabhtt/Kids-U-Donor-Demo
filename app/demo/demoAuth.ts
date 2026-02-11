"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export type DemoRole = "admin" | "volunteer";

const DEMO_ROLE_KEY = "demoRole";

export const getDemoRole = (): DemoRole | null => {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(DEMO_ROLE_KEY);
  if (value === "admin" || value === "volunteer") return value;
  return null;
};

export const setDemoRole = (role: DemoRole) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(DEMO_ROLE_KEY, role);
};

export const clearDemoRole = () => {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(DEMO_ROLE_KEY);
};

export const useRequireDemoRole = (role: DemoRole) => {
  const router = useRouter();

  useEffect(() => {
    const currentRole = getDemoRole();
    if (!currentRole || currentRole !== role) {
      router.replace("/");
    }
  }, [role, router]);
};
