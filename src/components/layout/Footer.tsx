import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";
import { socialLinks } from "@/src/constants/socials";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="relative px-5 pb-10 pt-24 md:px-8 md:pt-32" id="contact">
        <div className="mx-auto max-w-6xl">
          <div className="surface relative overflow-hidden px-6 py-16 text-center md:px-12 md:py-24">
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-white/[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
            <div aria-hidden className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-violet-600/25 blur-[100px]" />

            <div className="relative flex flex-col items-center">
              <span className="eyebrow">Contact</span>
              <h2 className="section-title mt-4">
                Let&apos;s get in <span className="text-gradient">touch</span>
              </h2>
              <a
                href="mailto:petkovandrey03@gmail.com"
                className="group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-violet-200 md:text-base"
              >
                petkovandrey03@gmail.com
                <IconArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <div className="mt-8 flex items-center gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08]"
                  >
                    <Image src={s.icon} alt="" width={20} height={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-3 font-mono text-xs text-muted-foreground md:flex-row">
            <p>Copyright ©{currentYear} Andrey Petkov</p>
            <a href="#home" className="transition hover:text-white">Back to top ↑</a>
          </div>
        </div>
      </footer>
    );
}
