"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Marquee from "@/components/effects/marquee";
import ScrambleText from "@/components/effects/scramble-text";
import { site } from "@/content/site";
import { EASE_OUT_EXPO } from "@/lib/utils";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el);
  else el.scrollIntoView({ behavior: "smooth" });
}

function KineticLine({
  text,
  delay,
  className = "",
}: {
  text: string;
  delay: number;
  className?: string;
}) {
  return (
    <span className={`block overflow-hidden ${className}`} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          aria-hidden
          initial={{ y: "110%", rotate: 4 }}
          animate={{ y: 0, rotate: 0 }}
          transition={{ delay: delay + i * 0.035, duration: 0.9, ease: EASE_OUT_EXPO }}
          whileHover={{ y: "-8%", transition: { duration: 0.2 } }}
          className="inline-block will-change-transform"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

function RotatingWord() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % site.specialties.length),
      2400,
    );
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <span className="relative inline-flex h-[1.4em] overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={site.specialties[index]}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
          className="inline-block whitespace-nowrap text-primary"
        >
          {site.specialties[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function IndexRow({
  number,
  label,
  description,
  delay,
  children,
}: {
  number: string;
  label: string;
  description: string;
  delay: number;
  children: (content: ReactNode) => ReactNode;
}) {
  const [hovered, setHovered] = useState(false);

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: EASE_OUT_EXPO }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden border-b border-border"
    >
      <div
        aria-hidden
        className="absolute inset-0 translate-y-full bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0"
      />
      <div className="relative flex items-center gap-4 px-1 py-4 transition-colors duration-300 group-hover:text-background sm:gap-8 sm:py-5">
        <span className="font-mono text-[10px] text-muted-foreground transition-colors duration-300 group-hover:text-background/60 sm:text-xs">
          {number}
        </span>
        <ScrambleText
          text={label}
          play={hovered}
          className="font-mono text-xl font-bold uppercase tracking-tight sm:text-3xl lg:text-4xl"
        />
        <span className="ml-auto hidden font-mono text-xs text-muted-foreground transition-colors duration-300 group-hover:text-background/70 md:block">
          {description}
        </span>
        <ArrowUpRight className="h-4 w-4 shrink-0 opacity-40 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </motion.div>
  );

  return <>{children(content)}</>;
}

export default function Hero() {
  return (
    <section id="top" className="relative px-6 pt-28 sm:pt-32">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          className="mb-6 font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground sm:text-xs"
        >
          <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          {site.title} — {site.handle}
        </motion.p>

        <h1 className="font-mono font-bold uppercase leading-[0.92] tracking-tighter text-[clamp(2.6rem,11.5vw,9rem)]">
          <KineticLine text="Ibrahim" delay={0.1} />
          <KineticLine text="Afolabi" delay={0.28} className="text-muted-foreground" />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7, ease: EASE_OUT_EXPO }}
          className="mt-8 max-w-2xl font-mono text-sm uppercase tracking-[0.12em] text-muted-foreground sm:text-base"
        >
          Building <RotatingWord />
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7, ease: EASE_OUT_EXPO }}
          className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {site.heroSupport}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7, ease: EASE_OUT_EXPO }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            Say hello <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            onClick={() => scrollToId("works")}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Scroll for work <ArrowDown className="h-3.5 w-3.5" />
          </button>
        </motion.div>

        <div className="mt-16 sm:mt-20">
          {site.index.map((item, i) => (
            <IndexRow
              key={item.id}
              number={item.number}
              label={item.label}
              description={item.description}
              delay={0.95 + i * 0.08}
            >
              {(content) => (
                <button
                  type="button"
                  onClick={() => scrollToId(item.id)}
                  className="block w-full text-left"
                >
                  {content}
                </button>
              )}
            </IndexRow>
          ))}
        </div>
      </div>

      <div className="mt-16 sm:mt-20">
        <Marquee items={site.marquee} />
      </div>
    </section>
  );
}
