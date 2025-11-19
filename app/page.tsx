import dynamic from 'next/dynamic';
import { Hero } from "@/src/components";
import { SectionLoadingPlaceholder } from "@/src/components/ui/LoadingSpinner";

// Lazy load heavy components to improve initial page load
const BentoGridDemo = dynamic(() => import('@/src/components').then(mod => ({ default: mod.BentoGridDemo })), {
  loading: () => <SectionLoadingPlaceholder height="h-96" />,
  ssr: false
});

const ProjectsSection = dynamic(() => import('@/src/components').then(mod => ({ default: mod.ProjectsSection })), {
  loading: () => <SectionLoadingPlaceholder height="h-screen" />,
  ssr: false
});

const MyAusbildung = dynamic(() => import('@/src/components').then(mod => ({ default: mod.MyAusbildung })), {
  loading: () => <SectionLoadingPlaceholder height="h-96" />,
  ssr: false
});

const Footer = dynamic(() => import('@/src/components').then(mod => ({ default: mod.Footer })), {
  loading: () => <SectionLoadingPlaceholder height="h-32" />,
  ssr: false
});

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
