"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { site } from "@/content/site";
import { EASE_OUT_EXPO } from "@/lib/utils";

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Instagram: Instagram,
} as const;

function LagosClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Africa/Lagos",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return <span className="tabular-nums">{time || "—:—:—"} WAT</span>;
}

export default function MegaFooter() {
  return (
    <footer id="contact" className="px-6 pb-8 pt-28 sm:pt-40" aria-label="Contact">
      <div className="mx-auto max-w-7xl">
        <p className="border-b border-border pb-4 font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground sm:text-xs">
          04 / What&apos;s Next
        </p>

        <motion.a
          href={`mailto:${site.email}?subject=Let's%20build%20something`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
          className="group block py-14 sm:py-20"
        >
          <span className="block font-mono text-[clamp(2.4rem,9.5vw,8.5rem)] font-bold uppercase leading-[0.95] tracking-tighter transition-colors duration-300 group-hover:text-primary">
            Let&apos;s build
          </span>
          <span className="flex items-center gap-4 font-mono text-[clamp(2.4rem,9.5vw,8.5rem)] font-bold uppercase leading-[0.95] tracking-tighter text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:gap-8">
            something
            <span className="inline-block text-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-4 group-hover:-translate-y-2">
              ↗
            </span>
          </span>
        </motion.a>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-border pt-6 sm:flex-row">
          <div className="order-1 flex items-center gap-1">
            {site.socials.map((social) => {
              const Icon = iconMap[social.label as keyof typeof iconMap] ?? Mail;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-muted-foreground transition-colors hover:border-border hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-muted-foreground transition-colors hover:border-border hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <p className="order-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {site.location} — <LagosClock />
          </p>

          <button
            type="button"
            onClick={() => {
              if (window.__lenis) window.__lenis.scrollTo(0);
              else window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="order-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

        <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
          © {new Date().getFullYear()} {site.name} — {site.handle}
        </p>
      </div>
    </footer>
  );
}
