"use client";

import { useEffect, useState } from "react";
import { FileText } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";
import ResumeModal from "@/components/resume-modal";
import { site } from "@/content/site";

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

export default function Navigation() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <a
            href="#top"
            className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-foreground transition-colors hover:text-primary"
          >
            AO
          </a>

          <p className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:block">
            {site.location} — <LagosClock />
          </p>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <FileText className="h-3.5 w-3.5" />
              CV
            </button>
          </div>
        </div>
      </header>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
