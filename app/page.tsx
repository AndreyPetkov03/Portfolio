import Hero from "@/components/Hero";
import { BentoGridDemo } from "@/components/BentoGrid";
import Projects from "@/components/Projects";
import { MyAusbildung } from "@/components/myAusbildung";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">
      <div className=" w-full">
        <Hero />
        <BentoGridDemo />
        <Projects />
        <MyAusbildung />
      </div>
      
    </main>
  );
}
