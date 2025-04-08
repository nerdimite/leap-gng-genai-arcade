import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono, VT323 } from "next/font/google";
import { Header } from "@/components/Header";
import "./globals.css";
import { dark, neobrutalism } from "@clerk/themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const vt323 = VT323({
  variable: "--font-vt323",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GenAI Arcade",
  description: "GenAI Arcade for LEAP 5M Interns",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: [dark, neobrutalism],
      }}
    >
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${vt323.variable} antialiased bg-black`}
        >
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
