import Hero from "@/components/Hero";
import { BentoGridDemo } from "@/components/BentoGrid";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">
      <div className=" w-full">
        <Hero />
        <BentoGridDemo />
        <Projects />
      </div>
      
    </main>
  );
}
