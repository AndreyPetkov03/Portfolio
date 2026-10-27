"use client";
import React from "react";
import { GlowingStarsBackgroundCard } from "./GlowingStars";

export function CodingCard() {
  return (
    <div className="flex flex-1 items-stretch antialiased">
      <GlowingStarsBackgroundCard>
        <p className="relative mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground"><span className="hidden [@media(hover:hover)]:inline">Hover me</span><span className="[@media(hover:hover)]:hidden">Tap me</span></p>
      </GlowingStarsBackgroundCard>
    </div>
  );
}
