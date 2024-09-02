import { Project1 } from "./ui/Project1";
import { Project2 } from "./ui/Project2";
import { Project3 } from "./ui/Project3";
import { Project4 } from "./ui/Project4";


export default function Projects() {
    return (
        <div className="bg-[url('../public/images/background2.png')] bg-cover bg-center p-7" id="projects">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-center pt-28 ">My <span className="text-purple">Projects</span></h1>

                <div className="flex flex-wrap align-middle justify-evenly max-w-6xl mx-auto">
                <Project1 />
                <Project2 />
                
                <Project3 />
                <Project4 />
                </div>
            
        </div>
    );
}