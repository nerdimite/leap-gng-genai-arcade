import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      {/* Subtle gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/30 to-transparent"></div>

      {/* Main content */}
      <main className="flex-1 container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between">
        {/* Left side content */}
        <div className="max-w-xl mb-10 md:mb-0">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <div className="mb-2">Glitch and Giggle</div>
            <div className="text-3xl md:text-4xl text-purple-400">
              Gen AI Edition 2025
            </div>
          </h1>

          <p className="text-xl mb-8 opacity-80 leading-relaxed">
            The event is now and generative AI games are thriving. During this
            event, you will compete in a series of challenges while learning
            about the fascinating world of generative AI. Explore the frontiers
            of artificial intelligence and see for yourself.
          </p>

          <Button asChild size="lg" variant="glitch">
            <Link href="/glitch-and-giggle">
              <span className="mr-2">▶</span> ENTER GAME
            </Link>
          </Button>
        </div>

        {/* Right side - Pixelated Robot */}
        <div className="w-64 h-64 md:w-80 md:h-80 relative">
          {/* Robot Head */}
          <div className="w-full h-full relative">
            {/* Robot head background */}
            <div
              className="absolute w-full h-full bg-gray-800 transform rotate-3"
              style={{
                clipPath: "polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%)",
              }}
            ></div>

            {/* Robot eyes */}
            <div className="absolute top-1/4 left-1/4 w-1/5 h-1/5 bg-cyan-400"></div>
            <div className="absolute top-1/4 right-1/4 w-1/5 h-1/5 bg-cyan-400"></div>

            {/* Robot mouth */}
            <div className="absolute bottom-1/4 left-1/3 w-1/3 h-1/8 flex space-x-1">
              <div className="w-1/4 h-full bg-cyan-400"></div>
              <div className="w-1/4 h-full bg-cyan-400"></div>
              <div className="w-1/4 h-full bg-cyan-400"></div>
            </div>

            {/* Robot antenna */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/8 h-1/4">
              <div className="w-full h-3/4 bg-gray-600"></div>
              <div className="w-full h-1/4 bg-red-500 rounded-full"></div>
            </div>
          </div>

          {/* Glitch effect */}
          <div className="absolute inset-0 border-l-4 border-r-4 border-cyan-500 opacity-70 animate-pulse"></div>
          <div
            className="absolute inset-0 border-t-4 border-b-4 border-red-500 opacity-70 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>

          {/* RGB shift effect */}
          <div className="absolute inset-0 bg-red-500 mix-blend-multiply opacity-20 transform translate-x-1"></div>
          <div className="absolute inset-0 bg-blue-500 mix-blend-multiply opacity-20 transform -translate-x-1"></div>
        </div>
      </main>
    </div>
  );
}
