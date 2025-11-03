"use client";
import React from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "./GlowingStars";

export function CodingCard() {
  return (
    <div className="flex py-0 items-center justify-center antialiased">
      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle></GlowingStarsTitle>
      </GlowingStarsBackgroundCard>
    </div>
  );
}

