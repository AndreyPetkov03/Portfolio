"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./Card";
import Link from "next/link";
import PortfolioPic from '../../public/images/Portfolio.png';
import { AnimatedTooltip2, AnimatedTooltipPreview } from "./Tooltip";
import UnknownImage from '../../public/images/Unknown.png';

export function Project4() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto xs:w-full sm:w-[30rem] h-auto rounded-xl p-6 border  ">
      <CardItem translateZ="100" className="w-full h-60 mt-4">
          <Image
            src={UnknownImage}
            height="800"
            width="800"
            className="h-60 w-full object-scale rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white mt-16"
        >
          Coming Soon
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm w-full h-20  mt-2 dark:text-neutral-300"
        >
          The last project will be my biggest one yet and also my final project to complete my apprenticeship.
        </CardItem>
        
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            
            className=" rounded-xl text-xs font-normal dark:text-white"
          >
            <AnimatedTooltip2/>
          </CardItem>
          
        </div>
      </CardBody>
    </CardContainer>
  );
}
