"use client";
import { useEffect, useState } from "react";
import { personal, skills } from "@/data/portfolio";

const roles = ["Data Engineer","AI Builder","Pipeline Architect","Analytics Engineer","Cloud Data Engineer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const allSkills = [...skills.cloud, ...skills.de.slice(0, 4), ...skills.ai.slice(0, 3)];

  return (
    <section id="home" className="relative min-h-screen flex items-center grid-bg pt-20" style={{background:"#F8F9FC"}}>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-[0.07] bg-accent-blue blur-[140px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-green/30 bg-accent-green/8 text-accent-green text-xs mb-8 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
            {personal.statusDetail}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-3 leading-tight" style={{fontFamily:"var(--font-display)"}}>
            {personal.name.split(" ").slice(0,2).join(" ")}
            <br />
            <span className="text-text-muted font-normal">{personal.name.split(" ")[2]}</span>
          </h1>
          <div className="flex items-center gap-2 mb-5 h-10">
            <span className="text-xl md:text-2xl text-accent-blue font-medium" style={{fontFamily:"var(--font-display)"}}>
              {displayed}
              <span className="animate-blink border-r-2 border-accent-blue ml-0.5" />
            </span>
          </div>
          <p className="text-text-secondary text-base leading-relaxed max-w-2xl mb-8">{personal.bio}</p>
          <div className="flex flex-wrap gap-3 mb-12">
            <a href="#projects" className="px-6 py-3 rounded-lg bg-accent-blue text-white font-medium text-sm hover:bg-blue-700 transition-colors">
              View my work
            </a>
            <a href="#contact" className="px-6 py-3 rounded-lg border border-border-default text-text-secondary hover:border-accent-blue/50 hover:text-accent-blue transition-colors text-sm">
              Get in touch
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-border-subtle text-text-muted hover:border-border-default hover:text-text-secondary transition-colors text-sm">
              GitHub ↗
            </a>
          </div>
          <div className="flex flex-wrap gap-8 mb-12">
            {personal.stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-text-primary" style={{fontFamily:"var(--font-display)"}}>{s.value}</span>
                <span className="text-xs text-text-muted tracking-wide">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {allSkills.map((sk) => (
              <span key={sk} className="text-xs px-3 py-1.5 rounded-full bg-white border border-border-default text-text-muted hover:border-accent-blue/40 hover:text-accent-blue transition-colors shadow-sm">
                {sk}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-dim">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="animate-bounce">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
