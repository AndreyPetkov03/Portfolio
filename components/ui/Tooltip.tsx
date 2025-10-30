"use client";
import React from "react";
import { AnimatedTooltip } from "./animatedTooltip";



// Define tooltip sets as constants
const TOOLTIP_SETS = {
  portfolio: [
    { id: 1, name: "", designation: "React", image: "/LOGOS/react Projects.svg" },
    { id: 2, name: "", designation: "Tailwind", image: "/LOGOS/tailwind Projects.svg" },
    { id: 3, name: "", designation: "Next.js", image: "/LOGOS/next Projects.svg" },
    { id: 4, name: "", designation: "TypeScript", image: "/LOGOS/typescript Projects.svg" },
    { id: 5, name: "", designation: "Framer Motion", image: "/LOGOS/framermotion Projects.svg" },
  ],
  intranet: [
    { id: 1, name: "", designation: "React", image: "/LOGOS/react Projects.svg" },
    { id: 2, name: "", designation: "Tailwind", image: "/LOGOS/tailwind Projects.svg" },
    { id: 3, name: "", designation: "Next.js", image: "/LOGOS/next Projects.svg" },
    { id: 4, name: "", designation: "TypeScript", image: "/LOGOS/typescript Projects.svg" },
    // Add more specific logos for intranet project
  ],
  gallery: [
    { id: 1, name: "", designation: "React", image: "/LOGOS/react Projects.svg" },
    { id: 2, name: "", designation: "Tailwind", image: "/LOGOS/tailwind Projects.svg" },
    { id: 3, name: "", designation: "Next.js", image: "/LOGOS/next Projects.svg" },
    { id: 4, name: "", designation: "TypeScript", image: "/LOGOS/typescript Projects.svg" },
    // Add more specific logos for gallery project
  ],
  comingSoon: Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    name: "",
    designation: "????",
    image: "/images/Unknown3.png",
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



