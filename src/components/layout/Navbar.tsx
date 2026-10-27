"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { navItems } from "@/src/constants/navigation";
import { cn } from "@/src/utils/cn";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link of whichever section is currently in the middle of the viewport.
  // Sections are lazy loaded, so re-query them until they all exist.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    const observed = new Set<Element>();
    const attach = () => {
      navItems.forEach(({ link }) => {
        const el = document.querySelector(link);
        if (el && !observed.has(el)) {
          observer.observe(el);
          observed.add(el);
        }
      });
    };
    attach();
    const interval = window.setInterval(attach, 1000);
    return () => {
      window.clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={cn(
          "flex w-full max-w-5xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-300",
          scrolled || open
            ? "border-white/10 bg-background/70 shadow-[0_8px_30px_rgb(0_0_0/0.4)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        )}
      >
        <Link href="#home" className="flex items-center gap-2 pl-2" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
            AP
          </span>
          <span className="hidden font-display text-sm font-medium text-white sm:block">Andrey Petkov</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.link}>
              <Link
                href={item.link}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-colors",
                  active === item.link ? "text-white" : "text-muted-foreground hover:text-white"
                )}
              >
                {active === item.link && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-white/[0.08]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-violet-200 md:block"
        >
          Contact Me
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-full text-white md:hidden"
        >
          {open ? <IconX size={20} /> : <IconMenu2 size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="surface absolute inset-x-4 top-[4.5rem] flex flex-col gap-1 bg-background/95 p-2 backdrop-blur-xl md:hidden"
          >
            {navItems.map((item) => (
              <li key={item.link}>
                <Link
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-base",
                    active === item.link ? "bg-white/[0.06] text-white" : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
