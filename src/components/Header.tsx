import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full bg-black border-b border-gray-800 py-3 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-[family-name:var(--font-vt323)] text-white"
        >
          GenAI Arcade
        </Link>

        <UserButton />
      </div>
    </header>
  );
}
