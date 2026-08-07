"use client";

import Ambient from "@/components/effects/ambient";
import SmoothScroll from "@/components/effects/smooth-scroll";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import WorksAct from "@/components/landing/works-act";
import About from "@/components/landing/about";
import Experience from "@/components/landing/experience";
import MegaFooter from "@/components/landing/mega-footer";

export default function Portfolio() {
  return (
    <SmoothScroll>
      <Ambient />
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <WorksAct />
          <About />
          <Experience />
        </main>
        <MegaFooter />
      </div>
    </SmoothScroll>
  );
}
