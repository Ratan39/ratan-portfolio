"use client";
import { useState, useEffect } from "react";
import { personal } from "@/data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Visualization", href: "#visualization" },
  { label: "Certifications", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? "bg-white/90 backdrop-blur-md border-b border-border-subtle shadow-sm" : ""
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-bold text-accent-blue text-base tracking-wide" style={{fontFamily:"var(--font-display)"}}>
          RSM<span className="text-text-dim">.dev</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-xs text-text-muted hover:text-accent-blue transition-colors tracking-wide">
              {l.label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-xs text-accent-green font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
            Open to work
          </span>
          <a href={`mailto:${personal.email}`}
            className="text-xs px-4 py-2 rounded-md border border-accent-blue/40 text-accent-blue hover:bg-accent-blue hover:text-white transition-colors">
            Get in touch
          </a>
        </div>
        <button className="md:hidden text-text-muted hover:text-text-primary" onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-border-subtle px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              className="text-sm text-text-secondary hover:text-accent-blue transition-colors">{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
