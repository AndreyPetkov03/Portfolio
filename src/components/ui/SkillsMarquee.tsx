"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./Marquee";
import Image from "next/image";
import ReactLogo from '../../../public/LOGOS/React-icon.svg.png';
import TailwindLogo from '../../../public/LOGOS/Tailwind_CSS_Logo.svg.png';
import SqlLogo from '../../../public/LOGOS/sql-database-generic.svg';
import SassLogo from '../../../public/LOGOS/Sass_Logo_Color.svg.png';
import PhpLogo from '../../../public/LOGOS/PHP-logo.svg.png';
import ViteLogo from '../../../public/LOGOS/Vitejs-logo.svg.png';
import TypescriptLogo from '../../../public/LOGOS/Typescript_logo_2020.svg.png';
import NextjsLogo from '../../../public/LOGOS/NextjsLogo.webp';
import FramerMotionLogo from '../../../public/LOGOS/framer-motion.svg';
import FigmaLogo from '../../../public/LOGOS/figma.png';
import gitLogo from '../../../public/LOGOS/git.png';
import dockerLogo from '../../../public/LOGOS/Docker.svg';
import SupabaseLogo from '../../../public/LOGOS/Supabase.svg';
import SplineLogo from '../../../public/LOGOS/spline.webp';
import RustLogo from '../../../public/LOGOS/Rust.png';
import LuaLogo from '../../../public/LOGOS/Lua.svg';
import JavaLogo from '../../../public/LOGOS/java.png';
import BlenderLogo from '../../../public/LOGOS/Blender.svg';
import SolidityLogo from '../../../public/LOGOS/solidity.svg';
import NodejsLogo from '../../../public/LOGOS/nodejs.png';
import GithubLogo from '../../../public/LOGOS/github2.svg';
import CsharpLogo from '../../../public/LOGOS/Csharp.png';
import UnityLogo from '../../../public/LOGOS/UnityLogo.png';


export function SkillsMarquee() {
  return (
    <div className="relative -mx-6 flex flex-1 flex-col justify-center overflow-hidden py-2 md:-mx-8">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
        pauseOnHover={false}
        className= ""
      />
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="fast"
        pauseOnHover={false}
      />
    </div>
  );
}

const testimonials = [
  {
    quote: <Image src={ReactLogo} alt="React" loading="lazy" className="h-full w-full object-contain transition-transform duration-300 hover:scale-110" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={PhpLogo} alt="Php" loading="lazy" className="h-full w-full object-contain transition-transform duration-300 hover:scale-110" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={SqlLogo} alt="Sql" loading="lazy" className="h-full w-full object-contain transition-transform duration-300 hover:scale-110" />,
    name: "",
    title: "php",
  },
  {
    quote: <Image src={SassLogo} alt="Sass" loading="lazy" className="h-full w-full object-contain transition-transform duration-300 hover:scale-110" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={TailwindLogo} alt="Tailwind" loading="lazy" className="h-full w-full object-contain transition-transform duration-300 hover:scale-110" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={ViteLogo} alt="Vite" loading="lazy" className="h-full w-full object-contain transition-transform duration-300 hover:scale-110" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={TypescriptLogo} alt="Typescript" loading="lazy" className="h-full w-full object-contain transition-transform duration-300 hover:scale-110" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={NextjsLogo} alt="NextjsLogo" loading="lazy" className="h-full w-full object-contain transition-transform duration-300 hover:scale-110" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={FigmaLogo} alt="FigmaLogo" loading="lazy" className="h-full w-full object-contain transition-transform duration-300 hover:scale-110" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={gitLogo} alt="gitLogo" loading="lazy" className="h-full w-full object-contain transition-transform duration-300 hover:scale-110" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={FramerMotionLogo} alt="Framermotion" loading="lazy" className="h-full w-full object-contain transition-transform duration-300 hover:scale-110" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={dockerLogo} alt="Docker" loading="lazy" className="h-full w-full object-contain transition-transform duration-300 hover:scale-110" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={SupabaseLogo} alt="Supabase" loading="lazy" className="h-full w-full object-contain transition-transform duration-300 hover:scale-110" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={SplineLogo} alt="Spline" loading="lazy" className="h-full w-full object-contain transition-transform duration-300 hover:scale-110" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={RustLogo} alt="Rust" loading="lazy" className="h-full w-full object-contain transition-transform duration-300 hover:scale-110" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={LuaLogo} alt="Lua" loading="lazy" className="h-full w-full object-contain transition-transform duration-300 hover:scale-110" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={JavaLogo} alt="Java" loading="lazy" className="h-full w-full object-contain transition-transform duration-300 hover:scale-110" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={BlenderLogo} alt="Blender" loading="lazy" className="h-full w-full object-contain transition-transform duration-300 hover:scale-110" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={SolidityLogo} alt="Solidity" loading="lazy" className="h-full w-full object-contain transition-transform duration-300 hover:scale-110" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={NodejsLogo} alt="Node.js" loading="lazy" className="h-full w-full object-contain transition-transform duration-300 hover:scale-110" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={GithubLogo} alt="GitHub" loading="lazy" className="h-full w-full object-contain transition-transform duration-300 hover:scale-110" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={CsharpLogo} alt="C#" loading="lazy" className="h-full w-full object-contain transition-transform duration-300 hover:scale-110" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={UnityLogo} alt="Unity" loading="lazy" className="h-full w-full object-contain transition-transform duration-300 hover:scale-110" />,
    name: "",
    title: "",
  },
];
