import Hero from "../components/Hero";
import { BentoGridDemo } from "../components/BentoGrid";
import Projects from "../components/Projects";
import { MyAusbildung } from "../components/myAusbildung";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">
      <div className=" w-full">
        <Hero />
        <BentoGridDemo />
        <MyAusbildung />
        <Projects />
        <Footer />
      </div>
      
    </main>
  );
}
