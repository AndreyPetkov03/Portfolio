"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./Card";
import { AnimatedTooltipPreview, AnimatedTooltip2 } from "./Tooltip";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tooltipComponent: React.ReactNode;
  className?: string;
}

export function ProjectCard({ image, title, description, tooltipComponent, className = "" }: ProjectCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className={`bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ${className}`}>
        <CardItem translateZ="100" className="w-full h-60 mt-4">
          <Image
            src={image}
            height="800"
            width="800"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
            quality={100}
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white mt-16"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm w-full h-20 mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            className="rounded-xl text-xs font-normal dark:text-white"
          >
            {tooltipComponent}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}