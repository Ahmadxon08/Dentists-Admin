"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Auth = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const adminUser = localStorage.getItem("adminUser");

    if (!adminUser) {
      router.replace("/login");
    }
  }, [router]);

  return <>{children}</>;
};

export default Auth;
