import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { GlowingStarsBackgroundCardPreview } from "./ui/glowingStarsDemo";
import Phone3D from "./ui/Phone3D";
import CodeSnippet from "./ui/CodeSnippet";
import { InfiniteMovingCardsDemo } from "./ui/MarqueeDemo";
//row-span-2
export function BentoGridDemo() {
  return (
    <div className="bg-[url('../public/images/background1.png')] bg-cover bg-center w-full relative z-9000 ">
    <BentoGrid className=" max-w-6xl mx-auto mt-10 relative z-9000 ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={i === 2 ? "md:col-span-2 md:row-span-2" : i === 1 ? "md:row-span-2" : i === 0 ? "md:col-span-2 text-center" : ""}
        />
      ))}
    </BentoGrid>
    </div>
  );
}

const items = [
  {
    title: "My Skills",
    description: "",
    header: <InfiniteMovingCardsDemo />,
  },
  
  {
    title: "Responsive Design",
    description: "My designs adapt to any screen size.",
    header: <Phone3D />,
  },
  {
    title: "Commited to Clean and Maintainable Code",
    description:"I specialize in writing clean, readable, and maintainable code, ensuring high-quality and efficient solutions in every project. My focus on best practices and code simplicity makes my work easy to understand and extend.",
     header: <CodeSnippet />,
  },
  {
    title: "I ❤️ Coding",
    description: "And so will you my code",
    header: <GlowingStarsBackgroundCardPreview />,
  },
];
