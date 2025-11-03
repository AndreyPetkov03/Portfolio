"use client";
import React from "react";
import { AnimatedTooltip } from "./AnimatedTooltip";
import { TOOLTIP_SETS } from "@/src/constants/tooltips";
import { ProjectTooltipProps } from "@/src/types";

export function ProjectTooltip({ type }: ProjectTooltipProps) {
  return (
    <div className="flex flex-row items-center justify-center mb-0 w-full">
      <AnimatedTooltip items={TOOLTIP_SETS[type]} />
    </div>
  );
}

// Keep backward compatibility with existing components
export function AnimatedTooltipPreview() {
  return <ProjectTooltip type="portfolio" />;
}