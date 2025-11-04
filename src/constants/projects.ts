import { ProjectData } from "@/src/types";

export const projectsData: ProjectData[] = [
  {
    id: 1,
    image: "/images/portfolioImage.png",
    title: "My Portfolio",
    description: "Developed to showcase my skills in modern web development, this was one of my first React projects. Built with Next.js, React, Tailwind, Framer Motion, and TypeScript, it features a 3D iPhone created in Spline and a custom background designed in Figma. The project gave me hands-on experience with interactive UI animations, responsive design, and component-based architecture.",
    tooltipType: "portfolio",
    className: "",
    link: "https://github.com/AndreyPetkov03/Portfolio"
  },
  {
    id: 2,
    image: "/images/Intranet3.png",
    title: "The Intranet",
    description: "Developed during my apprenticeship at the International Repair Service, I was fully responsible for this project from planning to deployment. It includes a homepage overview, blog, announcements page, appointments system, image gallery, and an admin dashboard for managing content and permissions. All visuals, including logos and custom SVGs, were designed in Figma.",
    tooltipType: "intranet",
    className: "",
    link: ""
  },
  {
    id: 3,
    image: "/images/galleryGalleries.png",
    title: "Gallery App",
    description: "An Instagram-inspired gallery app that allows users to log in, upload images, name them, and add descriptions to create their personal 'art' gallery. Each user has a profile page where their gallery can be viewed by others. It was built using React, Next.js, TypeScript, and Tailwind, with Supabase handling authentication, storage, and backend data.",
    tooltipType: "gallery",
    className: "",
    link: "https://github.com/AndreyPetkov03/gallery-app"
  },
  {
    id: 4,
    image: "/images/weatherApp.png",
    title: "Weather App",
    description: "A simple weather application built to experiment with Vite and its fast development environment. It uses React, Tailwind, and TypeScript, retrieves live weather data from WeatherAPI, and features smooth Lottie animations for visual feedback.",
    tooltipType: "weatherApp",
    className: "",
    link: "https://github.com/AndreyPetkov03/weather-app"
  },
  {
    id: 5,
    image: "/projectImages/Survive the Desert.png",
    title: "Survive the Desert",
    description: "A survival game set in a desert environment, where players must gather resources, build shelters, and fend off threats. Built with Unity and C#, it features a dynamic weather system and day-night cycle.",
    tooltipType: "weatherApp",
    className: "",
    link: ""
  },
  {
    id: 6,
    image: "/images/weatherApp.png",
    title: "Weather App",
    description: "A simple weather application built to experiment with Vite and its fast development environment. It uses React, Tailwind, and TypeScript, retrieves live weather data from WeatherAPI, and features smooth Lottie animations for visual feedback.",
    tooltipType: "weatherApp",
    className: "",
    link: "https://github.com/AndreyPetkov03/weather-app"
  }
];