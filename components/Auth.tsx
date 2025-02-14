"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Auth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const AuthComponent: React.FC<P> = (props) => {
    const router = useRouter();
    const adminUser =
      typeof window !== "undefined" ? localStorage.getItem("adminUser") : null;

    useEffect(() => {
      if (!adminUser) {
        router.replace("/login");
      }
    }, [adminUser, router]);

    if (!adminUser) return null;

    return <WrappedComponent {...props} />;
  };

  AuthComponent.displayName = `Auth(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return AuthComponent;
};

export default Auth;
