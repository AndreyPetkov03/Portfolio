"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "./ui/myAusbildungFunctionality";

const content = [
  {
    title: "How it started",
    description:
      "Since childhood, I have been drawn to building things and exploring technology, so pursuing a career in tech was a natural choice for me. In 2023, I began my apprenticeship as a Developer at the international repair service, where I gained comprehensive knowledge and hands-on experience in development.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
      <Image
        src="/images/irs-building.png"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    </div>
    ),
  },
  {
    title: "1st Year",
    description:
      "I started my apprenticeship with little to no knowledge of programming. However, through hard work, dedication, and resources like freeCodeCamp, Mimo, and YouTube tutorials, I quickly conquered JavaScript.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/To-do-List.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "2nd Year",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "3rd Year",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
  {
    title: "After the apprenticeship",
    description:
      "Although my apprenticeship may be coming to an end, my journey has only just begun. I have a long road ahead to mastering web development. My current goal is to become a Senior Developer, and perhaps one day, own my own software company.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
export function MyAusbildung() {
  return (
    <div id="work">
    <h1 className="text-2xl md:text-3xl lg:text-4xl text-center pt-28 ">My <span className="text-purple">Apprenticeship</span></h1>
    <div className="py-14">
      <StickyScroll content={content} />
    </div>
    </div>
  );
}
