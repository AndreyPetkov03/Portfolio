"use client";
import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { IconArrowDownRight, IconArrowUpRight } from "@tabler/icons-react";
import { FlipWords } from '../ui/FlipWords';
import { ProfileCard } from '../ui/ProfileCard';
import { socialLinks } from '@/src/constants/socials';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] },
});

const Hero = () => {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-32" id="home">
      {/* Background: faint grid fading out from the centre plus two soft colour glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.04] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
        <div className="absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-[26rem] w-[26rem] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.25fr_1fr] lg:gap-10">
        <div className="order-2 flex flex-col items-start lg:order-1">
          <motion.p {...fadeUp(0)} className="eyebrow">
            Hi, I&apos;m Andrey
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
          >
            <FlipWords
              className="px-0"
              words={['Front-end', 'Full-stack', 'Software']}
              duration={3200}
            />
            <span className="block">Developer</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            A passionate Frontend / Fullstack web developer and UI/UX enthusiast specialized in building stunning pixel-perfect interactive websites/applications
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-violet-200"
            >
              Contact Me
              <IconArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/[0.04]"
            >
              View Projects
              <IconArrowDownRight size={16} className="transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.4)} className="mt-12 flex items-center gap-2">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08]"
              >
                <Image src={s.icon} alt="" width={18} height={18} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="order-1 mx-auto w-full max-w-[13rem] sm:max-w-xs lg:order-2 lg:max-w-sm"
        >
          <ProfileCard />
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:flex"
      >
        Scroll
        <span className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </a>
    </section>
  );
};

export default Hero
