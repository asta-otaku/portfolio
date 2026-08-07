"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import ScrambleText from "@/components/effects/scramble-text";
import { experience } from "@/content/site";
import { EASE_OUT_EXPO } from "@/lib/utils";

export default function Experience() {
  const [open, setOpen] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="experience"
      className="px-6 pt-28 sm:pt-40"
      aria-label="Experience"
    >
      <div className="mx-auto max-w-7xl">
        <p className="border-b border-border pb-4 font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground sm:text-xs">
          03 / Experience
        </p>

        <ul className="mt-8">
          {experience.map((job, i) => {
            const isOpen = open === i;
            return (
              <li key={job.company} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="group relative flex w-full items-center gap-4 overflow-hidden px-1 py-5 text-left sm:gap-8 sm:py-6"
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 translate-y-full bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0"
                  />
                  <span className="relative font-mono text-[10px] text-muted-foreground transition-colors duration-300 group-hover:text-background/60 sm:text-xs">
                    {String(i + 1).padStart(3, "0")}
                  </span>
                  <div className="relative min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <ScrambleText
                        text={job.company}
                        play={hovered === i}
                        className="font-mono text-xl font-bold uppercase tracking-tight transition-colors duration-300 group-hover:text-background sm:text-3xl"
                      />
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 group-hover:text-background/70">
                        {job.role}
                        {job.context ? ` · ${job.context}` : ""}
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground transition-colors duration-300 group-hover:text-background/60 sm:text-xs">
                      {job.range}
                    </p>
                  </div>
                  <span className="relative text-muted-foreground transition-colors duration-300 group-hover:text-background">
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-3 px-1 pb-8 pl-12 sm:pl-20">
                        {job.highlights.map((item) => (
                          <li
                            key={item}
                            className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base"
                          >
                            <span className="mr-2 text-primary">▹</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
