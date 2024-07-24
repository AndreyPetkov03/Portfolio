import Image from "next/image";
import Hero from "@/components/Hero";
import { BentoGridDemo } from "@/components/BentoGrid";
import Globe from "@/components/ui/globe";
import { GlowingStarsBackgroundCardPreview } from "@/components/ui/glowingStarsDemo";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <BentoGridDemo />
      </div>
      
    </main>
  );
}
