import React from "react";
import { ProjectCard } from "./ui/ProjectCard";
import { AnimatedTooltipPreview, AnimatedTooltip2 } from "./ui/Tooltip";

const projectsData = [
  {
    id: 1,
    image: "/images/Portfolio.png",
    title: "My Portfolio",
    description: "This project was one of my first ever React projects. It was Developed using modern technologies such as Next.js, React, Tailwind, Framer Motion and Typescript. The 3D iPhone was made using Spline and additionaly the background was made using Figma.",
    tooltipComponent: <AnimatedTooltipPreview />,
    className: "",
    link: "https://github.com/AndreyPetkov03/Portfolio"
  },
  {
    id: 2,
    image: "/images/Intranet3.png",
    title: "The Intranet",
    description: "This project was created during my apprenticeship at the International Repair Service, where I was fully responsible from planning to deployment. It features a homepage overview, blog, announcements page, appointments system, image gallery, and an admin dashboard for managing content and permissions. All visuals, including logos and custom SVGs, were designed in Figma.",
    tooltipComponent: <AnimatedTooltip2 />,
    className: "",
    link: ""
  },
  {
    id: 3,
    image: "/images/galleryGalleries.png",
    title: "The Gallery App",
    description: "This project will be a typical weather app that shows the weather of the city I live in.",
    tooltipComponent: <AnimatedTooltip2 />,
    className: "xs:w-[20rem]",
    link: "https://github.com/AndreyPetkov03/gallery-app"
  },
  {
    id: 4,
    image: "/images/Unknown.png",
    title: "Coming Soon",
    description: "The last project will be my biggest one yet and also my final project to complete my apprenticeship.",
    tooltipComponent: <AnimatedTooltip2 />,
    className: "xs:w-full",
    link: ""
  }
];

export default function Projects() {
    return (
        <div className="bg-[url('../public/images/background2.png')] bg-cover bg-center p-7" id="projects">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-center pt-28 ">My <span className="text-purple">Projects</span></h1>

            <div className="flex flex-wrap align-middle justify-evenly max-w-6xl mx-auto">
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        tooltipComponent={project.tooltipComponent}
                        className={project.className}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
}