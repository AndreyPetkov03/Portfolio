"use client";
import React from "react";
import { AnimatedTooltip } from "./animatedTooltip";
import ReactLogo from '../../public/LOGOS/React-icon.svg.png';
import TailwindLogo from '../../public/LOGOS/Tailwind_CSS_Logo.svg.png';
import SqlLogo from '../../public/LOGOS/sql-database-generic.svg';
import SassLogo from '../../public/LOGOS/Sass_Logo_Color.svg.png';
import PhpLogo from '../../public/LOGOS/PHP-logo.svg.png';
import ViteLogo from '../../public/LOGOS/Vitejs-logo.svg.png';
import TypescriptLogo from '../../public/LOGOS/Typescript_logo_2020.svg.png';
import NextjsLogo from '../../public/LOGOS/NextjsLogo.webp';
import FramerMotionLogo from '../../public/LOGOS/framer-motion.svg';
import UnknownLogo from '../../public/images/Unknown3.png';

import typescriptProjectsLogo from '../../public/LOGOS/typescript Projects.svg';
import framermotionProjectsLogo from '../../public/LOGOS/framermotion Projects.svg';
import reactProjectsLogo from '../../public/LOGOS/react Projects.svg';
import nextProjectsLogo from '../../public/LOGOS/next Projects.svg';
import tailwindProjectsLogo from '../../public/LOGOS/tailwind Projects.svg';



export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-0 w-full">
      <AnimatedTooltip items={logos} />
    </div>
  );
}
export function AnimatedTooltip2() {
  return (
    <div className="flex flex-row items-center justify-center mb-0 w-full">
      <AnimatedTooltip items={logos2} />
    </div>
  );
}
export function AnimatedTooltip3() {
  return (
    <div className="flex flex-row items-center justify-center mb-0 w-full">
      <AnimatedTooltip items={logos2} />
    </div>
  );
}
export function AnimatedTooltip4() {
  return (
    <div className="flex flex-row items-center justify-center mb-0 w-full">
      <AnimatedTooltip items={logos2} />
    </div>
  );
}

const logos = [
  {
    id: 1,
    name: "",
    designation: "React",
    image:
    reactProjectsLogo,
  },
  {
    id: 2,
    name: "",
    designation: "Tailwind",
    image:
    tailwindProjectsLogo,
  },
  {
    id: 3,
    name: "",
    designation: "Nextjs",
    image:
    nextProjectsLogo,
  },
  {
    id: 4,
    name: "",
    designation: "Typescript",
    image:
    typescriptProjectsLogo,
  },
  {
    id: 5,
    name: "",
    designation: "Framer Motion",
    image:
    framermotionProjectsLogo,
  },
];

const logos2 = [
  {
    id: 1,
    name: "",
    designation: "????",
    image:
      UnknownLogo,
  },
  {
    id: 2,
    name: "",
    designation: "????",
    image:
      UnknownLogo,
  },
  {
    id: 3,
    name: "",
    designation: "????",
    image:
      UnknownLogo,
  },
  {
    id: 4,
    name: "",
    designation: "????",
    image:
      UnknownLogo,
  },
  {
    id: 5,
    name: "",
    designation: "????",
    image:
      UnknownLogo,
  },
];

