"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getDemoRole } from "./demoAuth";

const ADMIN_PREFIX = "/admin";
const VOLUNTEER_PREFIX = "/volunteers";

export default function DemoGuard() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const role = getDemoRole();
    if (!role) return;

    if (pathname.startsWith(ADMIN_PREFIX) && role !== "admin") {
      router.replace("/volunteers");
    }
    if (pathname.startsWith(VOLUNTEER_PREFIX) && role !== "volunteer") {
      router.replace("/admin");
    }
  }, [pathname, router]);

  return null;
}
