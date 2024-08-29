export default function Footer() {
    return (
      <div className="bg-black mt-40 pt-10 pb-5 flex md:justify-between justify-center items-center flex-col">
        <p className="ml-0 md:ml-14 mb-3">Copyright ©2024 Andrey Petkov</p>
        <div className="flex md:ml-14 ml-0">
            <img src="/LOGOS/linkedin.svg" alt="linkedin" className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-100 rounded-lg border border-white/[0.2] p-2 mr-3" />
            <img src="/LOGOS/mail.svg" alt="mail" className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-100 rounded-lg border border-white/[0.2] p-2 mr-3" />
            <img src="/LOGOS/github.svg" alt="github" className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-100 rounded-lg border border-white/[0.2] p-2 mr-3" />
        </div>
      </div>
    );
  }