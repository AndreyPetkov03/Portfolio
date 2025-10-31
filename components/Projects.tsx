import React from "react";
import { ProjectCard } from "./ui/ProjectCard";
import { ProjectTooltip } from "./ui/Tooltip";

const projectsData = [
  {
    id: 1,
    image: "/images/Portfolio.png",
    title: "My Portfolio",
    description: "Developed to showcase my skills in modern web development, this was one of my first React projects. Built with Next.js, React, Tailwind, Framer Motion, and TypeScript, it features a 3D iPhone created in Spline and a custom background designed in Figma. The project gave me hands-on experience with interactive UI animations, responsive design, and component-based architecture.",
    tooltipComponent: <ProjectTooltip type="portfolio" />,
    className: "",
    link: "https://github.com/AndreyPetkov03/Portfolio"
  },
  {
    id: 2,
    image: "/images/Intranet3.png",
    title: "The Intranet",
    description: "Developed during my apprenticeship at the International Repair Service, I was fully responsible for this project from planning to deployment. It includes a homepage overview, blog, announcements page, appointments system, image gallery, and an admin dashboard for managing content and permissions. All visuals, including logos and custom SVGs, were designed in Figma.",
    tooltipComponent: <ProjectTooltip type="intranet" />,
    className: "",
    link: ""
  },
  {
    id: 3,
    image: "/images/galleryGalleries.png",
    title: "The Gallery App",
    description: "An Instagram-inspired gallery app that allows users to log in, upload images, name them, and add descriptions to create their personal 'art' gallery. Each user has a profile page where their gallery can be viewed by others. It was built using React, Next.js, TypeScript, and Tailwind, with Supabase handling authentication, storage, and backend data.",
    tooltipComponent: <ProjectTooltip type="gallery" />,
    className: "",
    link: "https://github.com/AndreyPetkov03/gallery-app"
  },
  {
    id: 4,
    image: "/images/Unknown.png",
    title: "Coming Soon",
    description: "The last project will be my biggest one yet and also my final project to complete my apprenticeship.",
    tooltipComponent: <ProjectTooltip type="weatherApp" />,
    className: "",
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