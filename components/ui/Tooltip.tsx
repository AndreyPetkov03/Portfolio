"use client";
import React from "react";
import { AnimatedTooltip } from "./animatedTooltip";

// Import only the logos we actually use
import reactProjectsLogo from '../../public/LOGOS/react Projects.svg';
import tailwindProjectsLogo from '../../public/LOGOS/tailwind Projects.svg';
import nextProjectsLogo from '../../public/LOGOS/next Projects.svg';
import typescriptProjectsLogo from '../../public/LOGOS/typescript Projects.svg';
import framermotionProjectsLogo from '../../public/LOGOS/framermotion Projects.svg';
import UnknownLogo from '../../public/images/Unknown3.png';



// Define tooltip sets as constants
const TOOLTIP_SETS = {
  portfolio: [
    { id: 1, name: "", designation: "React", image: reactProjectsLogo },
    { id: 2, name: "", designation: "Tailwind", image: tailwindProjectsLogo },
    { id: 3, name: "", designation: "Next.js", image: nextProjectsLogo },
    { id: 4, name: "", designation: "TypeScript", image: typescriptProjectsLogo },
    { id: 5, name: "", designation: "Framer Motion", image: framermotionProjectsLogo },
  ],
  intranet: [
    { id: 1, name: "", designation: "React", image: reactProjectsLogo },
    { id: 2, name: "", designation: "Tailwind", image: tailwindProjectsLogo },
    { id: 3, name: "", designation: "Next.js", image: nextProjectsLogo },
    { id: 4, name: "", designation: "TypeScript", image: typescriptProjectsLogo },
    // Add more specific logos for intranet project
  ],
  gallery: [
    { id: 1, name: "", designation: "React", image: reactProjectsLogo },
    { id: 2, name: "", designation: "Tailwind", image: tailwindProjectsLogo },
    { id: 3, name: "", designation: "Next.js", image: nextProjectsLogo },
    { id: 4, name: "", designation: "TypeScript", image: typescriptProjectsLogo },
    // Add more specific logos for gallery project
  ],
  comingSoon: Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    name: "",
    designation: "????",
    image: UnknownLogo,
  })),
};

// Single reusable component
interface ProjectTooltipProps {
  type: keyof typeof TOOLTIP_SETS;
}

export function ProjectTooltip({ type }: ProjectTooltipProps) {
  return (
    <div className="flex flex-row items-center justify-center mb-0 w-full">
      <AnimatedTooltip items={TOOLTIP_SETS[type]} />
    </div>
  );
}

// Keep backward compatibility with existing components
export function AnimatedTooltipPreview() {
  return <ProjectTooltip type="portfolio" />;
}

export function AnimatedTooltip2() {
  return <ProjectTooltip type="comingSoon" />;
}



