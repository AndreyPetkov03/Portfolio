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
  // Touch screens have no hover (and fire fake mouseenter on tap), so there a tap toggles the heart instead
  const canHover = () => window.matchMedia("(hover: hover)").matches;

  return (
    <div
      onMouseEnter={() => {
        if (canHover()) setMouseEnter(true);
      }}
      onMouseLeave={() => {
        if (canHover()) setMouseEnter(false);
      }}
      onClick={() => {
        if (!canHover()) setMouseEnter((v) => !v);
      }}
      className={cn(
        "relative p-4 h-full w-full overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] flex flex-col items-center justify-center cursor-pointer",
        className
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgb(236_72_153/0.18),transparent_60%)] transition-opacity duration-700",
          mouseEnter ? "opacity-100" : "opacity-0"
        )}
      />
      <div className="relative flex w-full flex-1 items-center justify-center">
        <Illustration mouseEnter={mouseEnter} />
      </div>
      {children}
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
      className="aspect-[3/2] max-h-56 md:max-h-32 p-1 w-full max-w-sm"
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
        background: isGlowing ? "#ec4899" : "#52525b", // Pink for heart, zinc for idle stars
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
