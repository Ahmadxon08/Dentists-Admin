"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Auth = (WrappedComponent: React.FC) => {
  return (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const adminUser = localStorage.getItem("adminUser");

      if (!adminUser) {
        router.push("/login");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default Auth;
