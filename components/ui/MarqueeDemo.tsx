"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/marquee";
import Image from "next/image";
import codeSnippet from '../../public/images/codeSnippet.jpeg';
import ReactLogo from '../../public/LOGOS/React-icon.svg.png';
import TailwindLogo from '../../public/LOGOS/Tailwind_CSS_Logo.svg.png';
import SqlLogo from '../../public/LOGOS/sql-database-generic.svg';
import SassLogo from '../../public/LOGOS/Sass_Logo_Color.svg.png';
import PhpLogo from '../../public/LOGOS/PHP-logo.svg.png';
import ViteLogo from '../../public/LOGOS/Vitejs-logo.svg.png';
import TypescriptLogo from '../../public/LOGOS/Typescript_logo_2020.svg.png';
import NextjsLogo from '../../public/LOGOS/NextjsLogo.webp';
import FramerMotionLogo from '../../public/LOGOS/framer-motion.svg';
import FigmaLogo from '../../public/LOGOS/figma.png';
import gitLogo from '../../public/LOGOS/git.png';


export function InfiniteMovingCardsDemo() {
  return (
    <div className=" h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black items-center justify-center relative overflow-hidden">
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
];
