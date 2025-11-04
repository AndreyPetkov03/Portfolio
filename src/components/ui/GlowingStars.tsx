"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/src/utils/cn";

export const GlowingStarsBackgroundCard = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setMouseEnter(true);
      }}
      onMouseLeave={() => {
        setMouseEnter(false);
      }}
      className={cn(
        "bg-[#0C0E23] p-4 max-w-md max-h-[20rem] h-full w-full rounded-xl border border-[#1c1c3f]",
        className
      )}
    >
      <div className="flex justify-center items-center">
        <Illustration mouseEnter={mouseEnter} />
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export const GlowingStarsDescription = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <p className={cn("text-base text-white max-w-[16rem]", className)}>
      {children}
    </p>
  );
};

export const GlowingStarsTitle = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <h2 className={cn("font-bold text-2xl text-[#eaeaea]", className)}>
      {children}
    </h2>
  );
};

export const Illustration = ({ mouseEnter }: { mouseEnter: boolean }) => {
  const stars = 150; // Reduced for more compact grid
  const columns = 15; // Reduced columns for better proportions

  const [glowingStars, setGlowingStars] = useState<number[]>([]);

  const highlightedStars = useRef<number[]>([]);

  // Heart pattern - perfectly symmetric in a 15-column grid
  const heartPattern = [
    // Row 2: Top curves (symmetric with gap in middle) - 6 stars
    18, 19, 20, 24, 25, 26,
    // Row 3: Full heart width (symmetric) - 11 stars
    32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
    // Row 4: Full heart width (symmetric) - 11 stars
    47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
    // Row 5: Slightly narrower (symmetric) - 9 stars
    63, 64, 65, 66, 67, 68, 69, 70, 71,
    // Row 6: More narrow (symmetric) - 7 stars
    79, 80, 81, 82, 83, 84, 85,
    // Row 7: Narrower (symmetric) - 5 stars
    95, 96, 97, 98, 99,
    // Row 8: Very narrow (symmetric) - 3 stars
    111, 112, 113,
    // Row 9: Point (center) - 1 star
    127
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!mouseEnter) {
        highlightedStars.current = Array.from({ length: 5 }, () =>
          Math.floor(Math.random() * stars)
        );
        setGlowingStars([...highlightedStars.current]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [mouseEnter]);

  return (
    <div
      className="h-56 p-1 w-full"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `1px`,
      }}
    >
      {[...Array(stars)].map((_, starIdx) => {
        const isHeartStar = heartPattern.includes(starIdx);
        const isRandomGlowing = glowingStars.includes(starIdx);
        
        // When hovering: only heart stars are visible
        // When not hovering: only random glowing stars are visible
        const isGlowing = mouseEnter ? isHeartStar : isRandomGlowing;
        const isVisible = mouseEnter ? isHeartStar : true; // Hide non-heart stars on hover
        
        const delay = (starIdx % 10) * 0.05;
        const heartDelay = heartPattern.indexOf(starIdx) * 0.005; // Sequential heart animation
        
        return (
          <div
            key={`matrix-col-${starIdx}}`}
            className="relative flex items-center justify-center"
          >
            <Star
              isGlowing={isGlowing}
              isVisible={isVisible}
              delay={mouseEnter && isHeartStar ? heartDelay : delay}
            />
            {mouseEnter && isHeartStar && <Glow delay={heartDelay} />}
            <AnimatePresence mode="wait">
              {!mouseEnter && isRandomGlowing && <Glow delay={delay} />}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

const Star = ({ isGlowing, isVisible = true, delay }: { isGlowing: boolean; isVisible?: boolean; delay: number }) => {
  return (
    <motion.div
      key={delay}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: isGlowing ? [1, 1.2, 2.5, 2.2, 1.5] : 1,
        background: isGlowing ? "#ff1493" : "#666", // Deep pink for heart
        opacity: isVisible ? 1 : 0, // Hide stars when not visible
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay: delay,
      }}
      className={cn("bg-violet-900 h-[1px] w-[1px] rounded-full relative z-20")}
    ></motion.div>
  );
};

const Glow = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay: delay,
      }}
      exit={{
        opacity: 0,
      }}
      className="absolute left-1/2 -translate-x-1/2 z-10 h-[4px] w-[4px] rounded-full bg-pink-500 blur-[1px] shadow-2xl shadow-pink-400"
    />
  );
};
