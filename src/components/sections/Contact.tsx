"use client";
import { personal } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-border-subtle bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="section-label mb-4">Let&apos;s connect</p>
          <h2 className="text-4xl font-bold text-text-primary mb-4" style={{fontFamily:"var(--font-display)"}}>Let&apos;s build something</h2>
          <p className="text-text-muted text-sm leading-relaxed mb-3">
            I&apos;m actively looking for roles in Data Engineering, AI, and Data Analytics. If you&apos;re building something interesting or have an opportunity that fits, I&apos;d love to hear from you.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-green/30 bg-accent-green/5 text-accent-green text-xs mb-10 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
            {personal.statusDetail}
          </div>
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <a href={`mailto:${personal.email}`}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-blue text-white font-medium text-sm hover:bg-blue-700 transition-colors">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Send a message
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border-default text-text-secondary hover:border-accent-blue/50 hover:text-accent-blue transition-colors text-sm">
              LinkedIn ↗
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border-subtle text-text-muted hover:border-border-default hover:text-text-secondary transition-colors text-sm">
              GitHub ↗
            </a>
          </div>
          <p className="text-xs text-text-dim">
            Or reach me directly at{" "}
            <a href={`mailto:${personal.email}`} className="text-accent-blue hover:underline">{personal.email}</a>
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-20 pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-text-dim">© 2025 Ratan Sai Mandela · Built with Next.js & deployed on Vercel</p>
        <div className="flex gap-4">
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs text-text-dim hover:text-accent-blue transition-colors">LinkedIn</a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-xs text-text-dim hover:text-accent-blue transition-colors">GitHub</a>
          <a href={`mailto:${personal.email}`} className="text-xs text-text-dim hover:text-accent-blue transition-colors">Email</a>
        </div>
      </div>
    </section>
  );
}
