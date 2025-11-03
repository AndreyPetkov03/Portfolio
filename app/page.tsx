import { 
  Hero, 
  BentoGridDemo, 
  ProjectsSection, 
  MyAusbildung, 
  Footer 
} from "@/src/components";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">
      <div className=" w-full">
        <Hero />
        <BentoGridDemo />
        <MyAusbildung />
        <ProjectsSection />
        <Footer />
      </div>
      
    </main>
  );
}
