import React from "react";
import { ProjectCard } from "@/src/components/ui/ProjectCard";
import { ProjectTooltip } from "@/src/components/ui/ProjectTooltip";
import { projectsData } from "@/src/constants/projects";

export default function ProjectsSection() {
    return (
        <div className="bg-[url('../public/images/background2.png')] bg-cover bg-center p-7" id="projects">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-center pt-28 ">
                My <span className="text-purple">Projects</span>
            </h1>

            <div className="flex flex-wrap align-middle justify-evenly max-w-6xl mx-auto">
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        tooltipComponent={<ProjectTooltip type={project.tooltipType} />}
                        className={project.className}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
}