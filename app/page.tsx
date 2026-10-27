import dynamic from 'next/dynamic';
import { Hero, Navbar } from "@/src/components";
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
    <main className="relative min-h-screen overflow-x-clip bg-background">
      {/* Page-wide grain overlay */}
      <div aria-hidden className="noise pointer-events-none fixed inset-0 z-[60] opacity-[0.035] mix-blend-overlay" />
      <Navbar />
      <Hero />
      <BentoGridDemo />
      <MyAusbildung />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
