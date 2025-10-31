"use client";
import React from "react";
import { AnimatedTooltip } from "./animatedTooltip";



// Define tooltip sets as constants
const TOOLTIP_SETS = {
  portfolio: [
    { id: 1, name: "", designation: "React", image: "/projectIcons/reactProject.svg" },
    { id: 2, name: "", designation: "Tailwind", image: "/projectIcons/tailwindProject.svg" },
    { id: 3, name: "", designation: "Next.js", image: "/projectIcons/nextProject.svg" },
    { id: 4, name: "", designation: "TypeScript", image: "/projectIcons/typescriptProject.svg" },
    { id: 5, name: "", designation: "Framer Motion", image: "/projectIcons/framermotionProject.svg" },
    { id: 6, name: "", designation: "Spline", image: "/projectIcons/splineProject.svg" },
  ],
  intranet: [
    { id: 1, name: "", designation: "React", image: "/projectIcons/reactProject.svg" },
    { id: 2, name: "", designation: "Tailwind", image: "/projectIcons/tailwindProject.svg" },
    { id: 3, name: "", designation: "Next.js", image: "/projectIcons/nextProject.svg" },
    { id: 4, name: "", designation: "TypeScript", image: "/projectIcons/typescriptProject.svg" },
    { id: 5, name: "", designation: "Figma", image: "/projectIcons/figmaProject.svg" },
    { id: 6, name: "", designation: "Docker", image: "/projectIcons/dockerProject.svg" },
    { id: 7, name: "", designation: "Sql", image: "/projectIcons/sqlProject.svg" },
    // Add more specific logos for intranet project
  ],
  gallery: [
    { id: 1, name: "", designation: "React", image: "/projectIcons/reactProject.svg" },
    { id: 2, name: "", designation: "Tailwind", image: "/projectIcons/tailwindProject.svg" },
    { id: 3, name: "", designation: "Next.js", image: "/projectIcons/nextProject.svg" },
    { id: 4, name: "", designation: "TypeScript", image: "/projectIcons/typescriptProject.svg" },
    { id: 5, name: "", designation: "Supabase", image: "/projectIcons/supabaseProject.svg" },
    // Add more specific logos for gallery project
  ],
  weatherApp: [
    { id: 1, name: "", designation: "React", image: "/projectIcons/reactProject.svg" },
    { id: 2, name: "", designation: "Tailwind", image: "/projectIcons/tailwindProject.svg" },
    { id: 3, name: "", designation: "Next.js", image: "/projectIcons/nextProject.svg" },
    { id: 4, name: "", designation: "TypeScript", image: "/projectIcons/typescriptProject.svg" },
    { id: 5, name: "", designation: "Supabase", image: "/projectIcons/supabaseProject.svg" },
    // Add more specific logos for weatherApp project
  ],
  // comingSoon: Array.from({ length: 5 }, (_, i) => ({
  //   id: i + 1,
  //   name: "",
  //   designation: "????",
  //   image: "/images/Unknown3.png",
  // })),
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




