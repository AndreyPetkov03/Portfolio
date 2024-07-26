"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./Card";
import Link from "next/link";
import PortfolioPic from '../../public/images/Portfolio.png';
import { AnimatedTooltipPreview } from "./Tooltip";

export function Project1() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
      <CardItem translateZ="100" className="w-full h-60 mt-4">
          <Image
            src={PortfolioPic}
            height="800"
            width="800"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white mt-16"
        >
          My Portfolio
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm w-full h-20 mt-2 dark:text-neutral-300"
        >
          This project was one of my first ever React projects. It was Developed using modern technologies such as Next.js, React, Tailwind, Framer Motion and Typescript. The 3D iPhone was made using Spline and additionaly the background was made using Figma.
        </CardItem>
        
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            
            className=" rounded-xl text-xs font-normal dark:text-white"
          >
            <AnimatedTooltipPreview/>
          </CardItem>
          
        </div>
      </CardBody>
    </CardContainer>
  );
}
