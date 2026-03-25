import React from "react";
import avatar from "@/assets/avatar.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import HeroCanvas from "@/components/HeroCanvas";
import TypingText from "@/components/TypingText";
import { TYPING_ROLES } from "@/pages/home/content/typingRoles";
import type { ScrollToHandler } from "@/pages/home/types";

type Props = {
  scrollTo: ScrollToHandler;
};

const HeroSection: React.FC<Props> = ({ scrollTo }) => (
  <section className="section section--home hero hero--3d" id="home" aria-labelledby="hero-heading">
    <HeroCanvas />
    <div className="container hero__centered">
      <img
        src={avatar}
        alt="Taliba Sadiq"
        className="hero__avatar"
        draggable={false}
        width={150}
        height={150}
        decoding="async"
      />
      <p className="hero__eyebrow hero__eyebrow--glow">Available for projects</p>
      <h1 id="hero-heading" className="hero__title hero__title--3d">
        Taliba Sadiq
      </h1>
      <p className="hero__typing-wrap">
        <TypingText words={TYPING_ROLES} className="hero__typing" />
      </p>
      <p className="hero__intro hero__intro--3d">
        I build software that holds up under real use: scalable systems, intelligent features, and
        code that keeps working as your product grows. Not just launch-day demos, but lasting solutions.
      </p>
      <div className="hero__actions hero__actions--center">
        <Button
          type="button"
          variant="ghost"
          className={cn("btn btn--primary btn--glow")}
          onClick={() => scrollTo("work", "/projects")}
        >
          See my work
        </Button>
        <Button
          type="button"
          variant="ghost"
          className={cn("btn btn--ghost btn--ghost-dark")}
          onClick={() => scrollTo("contact", "/contact")}
        >
          Let&apos;s talk
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
