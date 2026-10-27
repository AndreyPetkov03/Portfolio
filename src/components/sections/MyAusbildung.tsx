"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { cn } from "@/src/utils/cn";
import { SectionHeading } from "../ui/Reveal";

const content = [
  {
    title: "How it started",
    description:
      "Since childhood, I have been drawn to building things and exploring technology, so pursuing a career in tech was a natural choice for me. In 2023, I began my apprenticeship as a Developer at the international repair service, where I gained comprehensive knowledge and hands-on experience in development.",
    image: "/images/IRS_Logo.png",
    alt: "International Repair Service logo",
    fit: "contain",
  },
  {
    title: "1st Year",
    description:
      "In my first year, I focused on building a solid foundation in software development. I learned to work with the core technologies of web development, including HTML, CSS, JavaScript, SQL, and PHP. Getting familiar with professional workflows, version control, and agile teamwork helped me understand how real projects take shape. I gradually moved from small tasks to contributing to meaningful features, gaining confidence in both my skills and collaboration. This year laid the groundwork for my growth and prepared me for more complex challenges.",
    image: "/images/To-do-List.png",
    alt: "To-do list project",
    fit: "cover",
  },
  {
    title: "2nd Year",
    description:
      "During my second year, I expanded my skill set into modern front-end development, learning TypeScript, React, Next.js, and Tailwind. With these new technologies, I began developing the company's internal intranet platform—an interactive space for colleagues to share updates and connect. Working on this project helped me apply what I learned in a real-world environment and strengthened my understanding of building dynamic, user-focused applications. It marked the point where I started truly shaping product experiences rather than just contributing to them.",
    image: "/images/Intranet1.png",
    alt: "Intranet platform, first version",
    fit: "contain",
  },
  {
    title: "3rd Year",
    description:
      "In my third year, I continued developing the intranet and significantly expanded its features and overall quality. I focused on improving responsiveness, UI and UX design, smooth user interactions, animations, and loading performance. Additionally, I built an admin dashboard that allowed administrators to manage the platform directly within the Next.js application. This phase gave me the opportunity to refine both technical and design skills, while taking full ownership of a production-level product.",
    image: "/projectImages/irsIntranet.png",
    alt: "IRS Intranet",
    fit: "contain",
  },
  {
    title: "After the apprenticeship",
    description:
      "I am set to complete my apprenticeship between June and July. After graduating, I hope to continue expanding my skills and gaining new experience as a developer. I want to keep learning, take on new challenges, and grow both personally and professionally. I'm excited to explore new perspectives, contribute to meaningful projects, and continue developing my craft in the world of software development.",
    image: "/images/IHKZeugnis.jpg",
    alt: "IHK Zeugnis",
    fit: "contain",
  },
] as const;

type Step = (typeof content)[number];

function StepImage({ step, className }: { step: Step; className?: string }) {
  return (
    <div className={cn("surface relative aspect-[4/3] w-full overflow-hidden bg-black", className)}>
      <Image
        src={step.image}
        alt={step.alt}
        fill
        sizes="(min-width: 1024px) 480px, 100vw"
        className={step.fit === "cover" ? "object-cover" : "object-contain p-4"}
      />
    </div>
  );
}

function TimelineStep({
  step,
  index,
  active,
  onActive,
}: {
  step: Step;
  index: number;
  active: boolean;
  onActive: (i: number) => void;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <li ref={ref} className="relative pb-16 pl-10 last:pb-0 md:pl-14">
      {/* Dot on the timeline rail */}
      <span
        className={cn(
          "absolute left-0 top-1.5 grid h-[15px] w-[15px] -translate-x-[7px] place-items-center rounded-full border transition-colors duration-500",
          active ? "border-primary bg-primary/20" : "border-white/20 bg-background"
        )}
      >
        <span className={cn("h-1.5 w-1.5 rounded-full transition-colors duration-500", active ? "bg-primary" : "bg-white/20")} />
      </span>

      <span className="font-mono text-xs text-muted-foreground">{String(index).padStart(2, "0")}</span>
      <h3
        className={cn(
          "mt-1 font-display text-2xl font-semibold tracking-tight transition-colors duration-500 md:text-3xl",
          active ? "text-white" : "text-white/40"
        )}
      >
        {step.title}
      </h3>
      <p
        className={cn(
          "mt-4 max-w-xl text-base leading-relaxed transition-colors duration-500",
          active ? "text-muted-foreground" : "text-muted-foreground/50"
        )}
      >
        {step.description}
      </p>
      <StepImage step={step} className="mt-6 lg:hidden" />
    </li>
  );
}

export function MyAusbildung() {
  const [active, setActive] = useState(0);
  const handleActive = React.useCallback((i: number) => setActive(i), []);

  return (
    <section id="work" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Experience" title="My" accent="Apprenticeship" />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="relative">
            {/* Timeline rail with a progress fill up to the active step */}
            <div aria-hidden className="absolute bottom-0 left-0 top-2 w-px bg-white/10" />
            <motion.div
              aria-hidden
              className="absolute left-0 top-2 w-px origin-top bg-gradient-to-b from-primary to-cyan-400"
              animate={{ height: `${((active + 1) / content.length) * 100}%` }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <ol>
              {content.map((step, i) => (
                <TimelineStep key={step.title} step={step} index={i} active={active === i} onActive={handleActive} />
              ))}
            </ol>
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-32">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -16, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                >
                  <StepImage step={content[active]} />
                </motion.div>
              </AnimatePresence>
              <div className="mt-4 flex items-center justify-between font-mono text-xs text-muted-foreground">
                <span>{content[active].title}</span>
                <span>
                  {String(active + 1).padStart(2, "0")} / {String(content.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
