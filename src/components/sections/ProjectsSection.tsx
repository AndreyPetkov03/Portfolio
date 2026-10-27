import React from "react";
import { ProjectCard } from "@/src/components/ui/ProjectCard";
import { Reveal, SectionHeading } from "@/src/components/ui/Reveal";
import { projectsData } from "@/src/constants/projects";
import { TOOLTIP_SETS } from "@/src/constants/tooltips";

export default function ProjectsSection() {
    return (
        <section className="relative px-5 py-24 md:px-8 md:py-32" id="projects">
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-40 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />
            <div className="relative mx-auto max-w-6xl">
                <SectionHeading eyebrow="Selected work" title="My" accent="Projects" />

                <div className="grid gap-5 md:grid-cols-2 md:gap-6">
                    {projectsData.map((project, i) => (
                        <Reveal key={project.id} delay={(i % 2) * 0.1}>
                            <ProjectCard
                                image={project.image}
                                title={project.title}
                                description={project.description}
                                stack={TOOLTIP_SETS[project.tooltipType]}
                                className={project.className}
                                githubLink={project.githubLink}
                                liveLink={project.liveLink}
                                imageFit={project.imageFit}
                            />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
