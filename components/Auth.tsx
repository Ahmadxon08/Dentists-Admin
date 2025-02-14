"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Auth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const AuthComponent: React.FC<P> = (props) => {
    const router = useRouter();

    useEffect(() => {
      const adminUser = localStorage.getItem("adminUser");

      if (!adminUser) {
        router.push("/login");
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  AuthComponent.displayName = `Auth(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return AuthComponent;
};

export default Auth;
