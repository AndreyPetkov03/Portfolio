"use client";

import Image from "next/image";
import React from "react";
import { IconArrowUpRight } from "@tabler/icons-react";
import { ProjectCardProps } from "@/src/types";
import { cn } from "@/src/utils/cn";

export function ProjectCard({ image, title, description, stack, className = "", githubLink, liveLink, imageFit = "cover" }: ProjectCardProps) {
  const tech = stack.filter((t) => t.designation);

  return (
    <article
      className={cn(
        "surface group relative flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.14] hover:shadow-[0_20px_60px_-20px_rgb(139_92_246/0.35)]",
        className
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.06] bg-black">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 768px) 560px, 100vw"
          quality={90}
          className={cn(
            "transition-transform duration-700 ease-out group-hover:scale-[1.04]",
            imageFit === "contain" ? "object-contain p-12" : "object-cover object-top"
          )}
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="font-display text-xl font-semibold tracking-tight text-white md:text-2xl">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>

        {tech.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2">
            {tech.map((t) => (
              <li
                key={t.id}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] py-1 pl-1 pr-3 text-xs text-white/80"
              >
                <Image src={t.image} alt="" width={20} height={20} className="h-5 w-5 rounded-full object-cover" />
                {t.designation}
              </li>
            ))}
          </ul>
        )}

        {(githubLink || liveLink) && (
          <div className="mt-auto flex items-center gap-2 pt-7">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white transition hover:border-white/30 hover:bg-white/[0.05]"
              >
                <Image src="/LOGOS/github2.svg" alt="" width={14} height={14} />
                GitHub
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition hover:bg-violet-200"
              >
                Preview
                <IconArrowUpRight size={14} className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
