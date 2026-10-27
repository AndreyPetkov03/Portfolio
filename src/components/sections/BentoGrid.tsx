import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
import { CodingCard } from "../ui/CodingCard";
import Phone3D from "../ui/Phone3D";
import CodeSnippet from "../ui/CodeSnippet";
import { SkillsMarquee } from "../ui/SkillsMarquee";
import { Reveal, SectionHeading } from "../ui/Reveal";

export function BentoGridDemo() {
  return (
    <section className="relative px-5 py-24 md:px-8 md:py-32" id="about">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About" title="What I" accent="bring" />
        <BentoGrid>
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 0.08} className={item.className}>
              <BentoGridItem
                index={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className="h-full"
              />
            </Reveal>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const items = [
  {
    title: "My Skills",
    description: "",
    header: <SkillsMarquee />,
    className: "md:col-span-2",
  },
  {
    title: "Responsive Design",
    description: "My designs adapt to any screen size.",
    header: <Phone3D />,
    className: "md:row-span-2",
  },
  {
    title: "Commited to Clean and Maintainable Code",
    description:"I specialize in writing clean, readable, and maintainable code, ensuring high-quality and efficient solutions in every project. My focus on best practices and code simplicity makes my work easy to understand and extend.",
    header: <CodeSnippet />,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "I ❤️ Coding",
    description: "",
    header: <CodingCard />,
    className: "",
  },
];
