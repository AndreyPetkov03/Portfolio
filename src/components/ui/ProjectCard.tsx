"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./Card";
import { ProjectCardProps } from "@/src/types";

export function ProjectCard({ image, title, description, tooltipComponent, className = "", githubLink, liveLink }: ProjectCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className={`bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 sm:p-6 border ${className}`}>
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
          className="text-xl font-bold text-neutral-600 dark:text-white mt-8 sm:mt-16"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm w-full h-auto min-h-[5rem] sm:h-20 mt-2 dark:text-neutral-300 mb-4 sm:mb-0"
        >
          {description}
        </CardItem>
        
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-6 sm:mt-20 gap-4 sm:gap-0">
          <CardItem
            translateZ={20}
            className="rounded-xl text-xs font-normal dark:text-white"
          >
            {tooltipComponent}
          </CardItem>
          <div className="flex items-center gap-2">
            {githubLink && (
              <CardItem
                translateZ={20}
                as="button"
                className="px-3 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                onClick={() => window.open(githubLink, '_blank')}
              >
                <Image src="/LOGOS/github2.svg" alt="GitHub" width={14} height={14} className="dark:invert" />
                GitHub
              </CardItem>
            )}
            {liveLink && (
              <CardItem
                translateZ={20}
                as="button"
                className="px-3 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                onClick={() => window.open(liveLink, '_blank')}
              >
                Preview
                <Image src="/LOGOS/link.svg" alt="Link" width={14} height={14} className="invert dark:invert-0" />
              </CardItem>
            )}
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}