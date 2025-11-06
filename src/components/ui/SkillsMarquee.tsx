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


export function SkillsMarquee() {
  return (
    <div className=" h-[20rem] rounded-md flex flex-col antialiased bg-black items-center justify-center relative overflow-hidden">
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
    quote: <Image src={ReactLogo} alt="React" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={PhpLogo} alt="Php" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={SqlLogo} alt="Sql" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={SassLogo} alt="Sass" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={TailwindLogo} alt="Tailwind" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={ViteLogo} alt="Vite" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={TypescriptLogo} alt="Typescript" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={NextjsLogo} alt="NextjsLogo" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={FigmaLogo} alt="FigmaLogo" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={gitLogo} alt="gitLogo" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={FramerMotionLogo} alt="Framermotion" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={dockerLogo} alt="Docker" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={SupabaseLogo} alt="Supabase" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={SplineLogo} alt="Spline" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={RustLogo} alt="Rust" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={LuaLogo} alt="Lua" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={JavaLogo} alt="Java" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={BlenderLogo} alt="Blender" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={SolidityLogo} alt="Solidity" />,
    name: "",
    title: "",
  },
  {
    quote: <Image src={NodejsLogo} alt="Node.js" />,
    name: "",
    title: "",
  },
];
