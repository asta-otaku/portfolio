"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import MediaImage from "@/components/media-image";
import { otherProjects, site } from "@/content/site";
import { EASE_OUT_EXPO } from "@/lib/utils";

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const highlight = site.aboutHighlights.includes(
    word as (typeof site.aboutHighlights)[number],
  );

  return (
    <motion.span
      style={{ opacity }}
      className={`mr-[0.28em] inline-block ${highlight ? "text-primary" : ""}`}
    >
      {word}
    </motion.span>
  );
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.4"],
  });
  const words = site.aboutStatement.split(" ");

  return (
    <section id="about" className="px-6 pt-28 sm:pt-40" aria-label="About">
      <div className="mx-auto max-w-7xl">
        <p className="border-b border-border pb-4 font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground sm:text-xs">
          02 / About
        </p>

        <div ref={ref} className="mt-10 max-w-5xl">
          <p className="font-mono text-[clamp(1.4rem,3.6vw,2.9rem)] font-bold leading-snug tracking-tight">
            {words.map((word, i) => (
              <Word
                key={`${word}-${i}`}
                word={word}
                progress={scrollYProgress}
                range={[i / words.length, Math.min(1, (i + 1) / words.length)]}
              />
            ))}
          </p>
        </div>

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-[280px_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border"
          >
            <MediaImage
              src={site.photo}
              alt={site.name}
              fill
              className="object-cover"
              sizes="280px"
            />
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
              className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {site.tagline} {site.aboutDetail}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.05, duration: 0.7, ease: EASE_OUT_EXPO }}
              className="mt-4 max-w-xl font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs"
            >
              {site.education.degree} — {site.education.school},{" "}
              {site.education.place}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.1, duration: 0.7, ease: EASE_OUT_EXPO }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {site.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            <div className="mt-12 border-t border-border pt-8">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Also built
              </p>
              <ul className="space-y-3">
                {otherProjects.map((project) => (
                  <li key={project.title}>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-wrap items-baseline justify-between gap-2 border-b border-border/60 py-3 transition-colors hover:border-primary"
                    >
                      <span className="font-mono text-sm font-bold uppercase tracking-tight group-hover:text-primary sm:text-base">
                        {project.title}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {project.tech.join(" · ")}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
