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

const people = [
  {
    id: 1,
    name: "",
    designation: "Software Engineer",
    image:
      ReactLogo,
  },
  {
    id: 2,
    name: "",
    designation: "Product Manager",
    image:
      TailwindLogo,
  },
  {
    id: 3,
    name: "",
    designation: "Data Scientist",
    image:
      NextjsLogo,
  },
  {
    id: 4,
    name: "",
    designation: "UX Designer",
    image:
      TypescriptLogo,
  },
  {
    id: 5,
    name: "",
    designation: "UX Designer",
    image:
      FramerMotionLogo,
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-0 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
