"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "../ui/myAusbildungFunctionality";

const content = [
  {
    title: "How it started",
    description:
      "Since childhood, I have been drawn to building things and exploring technology, so pursuing a career in tech was a natural choice for me. In 2023, I began my apprenticeship as a Developer at the international repair service, where I gained comprehensive knowledge and hands-on experience in development.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
      <Image
        src="/images/IRS_Logo.png"
        width={300}
        height={300}
        className="h-full w-full object-contain"
        alt="linear board demo"
      />
    </div>
    ),
  },
  {
    title: "1st Year",
    description:
      "In my first year, I focused on building a solid foundation in software development. I learned to work with the core technologies of web development, including HTML, CSS, JavaScript, SQL, and PHP. Getting familiar with professional workflows, version control, and agile teamwork helped me understand how real projects take shape. I gradually moved from small tasks to contributing to meaningful features, gaining confidence in both my skills and collaboration. This year laid the groundwork for my growth and prepared me for more complex challenges.",
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
      "During my second year, I expanded my skill set into modern front-end development, learning TypeScript, React, Next.js, and Tailwind. With these new technologies, I began developing the company's internal intranet platform—an interactive space for colleagues to share updates and connect. Working on this project helped me apply what I learned in a real-world environment and strengthened my understanding of building dynamic, user-focused applications. It marked the point where I started truly shaping product experiences rather than just contributing to them.",
    content: (
      <div className="h-full w-full bg-black flex items-center justify-center text-white">
        <Image
          src="/images/Intranet1.png"
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "3rd Year",
    description:
      "In my third year, I continued developing the intranet and significantly expanded its features and overall quality. I focused on improving responsiveness, UI and UX design, smooth user interactions, animations, and loading performance. Additionally, I built an admin dashboard that allowed administrators to manage the platform directly within the Next.js application. This phase gave me the opportunity to refine both technical and design skills, while taking full ownership of a production-level product.",
    content: (
      <div className="h-full w-full bg-black flex items-center justify-center text-white">
        <Image
          src="/images/Intranet2.png"
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "After the apprenticeship",
    description:
      "I am set to complete my apprenticeship between June and July. After graduating, I hope to continue expanding my skills and gaining new experience as a developer. I want to keep learning, take on new challenges, and grow both personally and professionally. I'm excited to explore new perspectives, contribute to meaningful projects, and continue developing my craft in the world of software development.",
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