"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import MediaImage from "@/components/media-image";
import { featuredProjects, type FeaturedProject } from "@/content/site";

function WorkCard({
  project,
  index,
}: {
  project: FeaturedProject;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.93]);
  const dim = useTransform(scrollYProgress, [0, 1], [0, 0.45]);

  return (
    <div ref={ref} className="h-[78vh]">
      <motion.div
        style={{ scale }}
        className="group sticky top-[14vh] overflow-hidden rounded-2xl border border-white/10 bg-[hsl(240,6%,6%)]"
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(ellipse at 20% 20%, hsl(${project.hue} 50% 35% / 0.45), transparent 55%), radial-gradient(ellipse at 80% 80%, hsl(var(--primary) / 0.15), transparent 50%)`,
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"
        />

        <div className="relative z-10 flex min-h-[60vh] flex-col justify-between p-6 text-left sm:p-10 lg:p-14">
          <div className="flex items-start justify-between gap-6">
            <span className="font-mono text-xs text-white/50 sm:text-sm">
              /{String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-mono text-xs text-white/50 sm:text-sm">
              {project.year}
            </span>
          </div>

          <div className="grid items-center gap-8 py-8 sm:py-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <h3 className="font-mono text-[clamp(2rem,5vw,4.2rem)] font-bold uppercase leading-none tracking-tight text-white">
                {project.title}
              </h3>
              <p className="mt-5 max-w-xl font-mono text-sm leading-relaxed text-white/60 sm:text-base">
                {project.description}
              </p>
            </div>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            >
              <MediaImage
                src={project.image}
                alt={`${project.title} interface`}
                fill
                priority={index < 2}
                className="object-cover object-top"
                sizes="(min-width: 1024px) 45vw, 90vw"
              />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white/60 sm:text-xs"
              >
                {t}
              </span>
            ))}
            <div className="ml-auto flex items-center gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub`}
                  className="text-white/50 transition-colors hover:text-white"
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-primary"
              >
                Live site <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        <motion.div
          aria-hidden
          style={{ opacity: dim }}
          className="pointer-events-none absolute inset-0 z-20 bg-black"
        />
      </motion.div>
    </div>
  );
}

export default function WorksAct() {
  return (
    <section id="works" className="px-6 pt-24 sm:pt-32" aria-label="Selected works">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between border-b border-border pb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground sm:text-xs">
            01 / Selected Works
          </p>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:text-xs">
            {featuredProjects.length} projects
          </span>
        </div>

        <div className="mt-8">
          {featuredProjects.map((project, i) => (
            <WorkCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
