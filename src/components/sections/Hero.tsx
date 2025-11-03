import React from 'react';
import { Spotlight } from '../ui/Spotlight';
import { FlipWords } from '../ui/FlipWords';
import { BackgroundGradient } from '../ui/BackgroundGradient';
import Image from "next/image";
import exampleImg from '../../../public/images/profilePicture2.jpg';
import MagicButton from '../ui/MagicButton';
import { ProfileCard } from '../ui/ProfileCard';
import { FloatingNav } from '../ui/FloatingNavbar';
import { navItems } from '@/src/constants/navigation';


const Hero = () => {
  return (
    <div className="pb-20 pt-0" id="home">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple"/>
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-[999] lg:mt-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          
        <FloatingNav navItems={navItems}/>
        <ProfileCard />
          <p className="tracking-widest text-sm md:text-lg lg:text-2xl text-center text-blue-100 max-w-80 mb-3 mt-10">
            Hi, I&apos;m Andrey
          </p>
          
          <div className="flex">
          <FlipWords className="uppercase text-center md:tracking-wider mb-3 text-lg md:text-2xl lg:text-4xl text-purple" words={['Front-end', 'Full-stack', 'Software']} duration={3200}/>
          <p className="uppercase text-center md:tracking-wider mb-3 text-lg md:text-2xl lg:text-4xl text-purple">Developer</p>
          </div>
          
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-base lg:text-lg">
            A passionate Frontend / Fullstack web developer and UI/UX enthusiast specialized in building stunning pixel-perfect interactive websites/applications
          </p>

          <a href="#contact">
            <MagicButton/>
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Hero