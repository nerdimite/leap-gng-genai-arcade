"use client";

import AuthGuard from "@/components/AuthGuard";

export default function GlitchAndGiggleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthGuard>{children}</AuthGuard>;
}
