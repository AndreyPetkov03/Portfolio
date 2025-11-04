import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
      <div className="bg-black mt-40 pt-10 pb-5 flex md:justify-between justify-center items-center flex-col" id="contact">
        <p className="ml-0 mb-3">Copyright ©{currentYear} Andrey Petkov</p>
        <div className="flex ml-0 items-center">
            <a href="https://www.linkedin.com/in/andrey-petkov-5a1040373" target="_blank" rel="noopener noreferrer">
                <div className="cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-100 rounded-lg border border-white/[0.2] p-2 mr-2 w-9 h-9 transition-all duration-300 hover:scale-110 hover:bg-opacity-100 hover:border-white/[0.4] hover:shadow-lg hover:shadow-white/[0.2]">
                    <Image 
                        src="/LOGOS/linkedin.svg" 
                        alt="linkedin" 
                        width={20}
                        height={20}
                    />
                </div>
            </a>
            <a href="mailto:petkovandrey03@gmail.com" target="_blank" rel="noopener noreferrer">
                <div className="cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-100 rounded-lg border border-white/[0.2] p-2 mr-2 w-9 h-9 transition-all duration-300 hover:scale-110 hover:bg-opacity-100 hover:border-white/[0.4] hover:shadow-lg hover:shadow-white/[0.2]">
                    <Image 
                        src="/LOGOS/emailSvg.svg" 
                        alt="mail" 
                        width={20}
                        height={20}
                    />
                </div>
            </a>
            <a href="https://github.com/AndreyPetkov03" target="_blank" rel="noopener noreferrer">
                <div className="cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-100 rounded-lg border border-white/[0.2] p-2 mr-2 w-9 h-9 transition-all duration-300 hover:scale-110 hover:bg-opacity-100 hover:border-white/[0.4] hover:shadow-lg hover:shadow-white/[0.2]">
                    <Image 
                        src="/LOGOS/github.svg" 
                        alt="github" 
                        width={20}
                        height={20}
                    />
                </div>
            </a>
        </div>
      </div>
    );
}