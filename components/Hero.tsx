import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { FlipWords } from './FlipWords';
import { BackgroundGradient } from './ui/Background-gradient';
import Image from "next/image";
import exampleImg from '../public/images/profilePicture2.jpg';
import MagicButton from './ui/MagicButton';
import { BackgroundGradientDemo } from './ui/backgroundDemo';
import { FloatingNav } from './ui/floating-navbar';
import {navItems} from './navbarVariable.js';


const Hero = () => {
  return (
    <div className="pb-20 pt-0">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple"/>
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10 lg:mt-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          
        <FloatingNav navItems={navItems}/>
        <BackgroundGradientDemo />
        
        {/* <div className="relative inline-flex h-35 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mb-9">
           <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
           <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950  text-sm font-medium text-white backdrop-blur-3xl">
             <Image src={exampleImg} alt="Example Image" width={300} height={200} className="rounded-full" />
           </span>
        </div> */}
        {/* <Image src={exampleImg} alt="Example Image" width={500} height={300} /> */}
          <p className="tracking-widest text-sm md:text-lg lg:text-2xl text-center text-blue-100 max-w-80 mb-3 mt-10">
            Hi, I&apos;m Andrey
          </p>
          
          <div className="flex">
          <FlipWords className="uppercase text-center md:tracking-wider mb-3 text-lg md:text-2xlg lg:text-4xl text-purple" words={['Front-end', 'Full-stack', 'Software']} duration={3200}/>
          <p className="uppercase text-center md:tracking-wider mb-3 text-lg md:text-2xlg lg:text-4xl text-purple">Developer</p>
          </div>
          
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-base lg:text-lg">
            A passionate Frontend / Fullstack web developer and UI/UX enthusiast specialized in building stunning pixel-perfect interactive websites/applications
          </p>

          <a href="#about">
            <MagicButton/>
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Hero