"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface AuthGuardProps {
  children: ReactNode;
}

export default function AuthGuard({ children }: Readonly<AuthGuardProps>) {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    // Wait for Clerk to load user data
    if (isLoaded && !isSignedIn) {
      console.log("Redirecting to sign-in");
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  // Show nothing while loading
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  // If signed in, show the children
  if (isSignedIn) {
    return <>{children}</>;
  }

  // This should not be visible as the useEffect should redirect,
  // but it's a fallback
  return null;
}
