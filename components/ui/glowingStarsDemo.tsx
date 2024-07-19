"use client";
import React from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "../ui/glowing-stars";

export function GlowingStarsBackgroundCardPreview() {
  return (
    <div className="flex py-0 items-center justify-center antialiased">
      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle></GlowingStarsTitle>
        <div className="flex justify-between items-end">
          <GlowingStarsDescription>
          </GlowingStarsDescription>
        </div>
      </GlowingStarsBackgroundCard>
    </div>
  );
}

