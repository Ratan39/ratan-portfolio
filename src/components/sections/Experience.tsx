"use client";
import { experience, education } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-border-subtle" style={{background:"#F8F9FC"}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="section-label mb-2">Background</p>
          <h2 className="text-3xl font-bold text-text-primary" style={{fontFamily:"var(--font-display)"}}>Experience & education</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-6">
            {experience.map((exp, i) => (
              <div key={exp.company} className="relative pl-8">
                {i < experience.length - 1 && <div className="absolute left-3 top-8 bottom-0 w-px bg-border-default" />}
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-accent-blue/40 flex items-center justify-center shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-accent-blue" />
                </div>
                <div className="bg-white border border-border-subtle rounded-xl p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <div>
                      <h3 className="text-base font-semibold text-text-primary" style={{fontFamily:"var(--font-display)"}}>{exp.role}</h3>
                      <p className="text-sm text-accent-blue font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs text-text-muted block">{exp.period}</span>
                      <span className="text-xs text-text-dim">{exp.location}</span>
                    </div>
                  </div>
                  <span className="inline-block text-xs px-2.5 py-1 rounded-full tag-blue mb-4">{exp.type}</span>
                  <ul className="flex flex-col gap-2 mb-4">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-xs text-text-muted leading-relaxed">
                        <span className="text-accent-blue mt-0.5 shrink-0 font-bold">›</span>{b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((s) => (
                      <span key={s} className="text-xs px-2 py-0.5 bg-bg-secondary border border-border-subtle text-text-dim rounded-md">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider">Education</h3>
            <div className="bg-white border border-border-subtle rounded-xl p-6 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-purple/60 via-accent-purple/20 to-transparent" />
              <div className="w-10 h-10 rounded-lg bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center mb-4">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#7C3AED" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-text-primary mb-1" style={{fontFamily:"var(--font-display)"}}>{education.degree}</h3>
              <p className="text-sm text-accent-purple font-medium mb-1">{education.school}</p>
              <p className="text-xs text-text-dim mb-1">{education.location}</p>
              <p className="text-xs text-text-dim">{education.period}</p>
            </div>
            <div className="bg-white border border-border-subtle rounded-xl p-5 shadow-sm">
              <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">Core strengths</h4>
              {[
                {label:"Data Engineering",level:90},
                {label:"Cloud (AWS/GCP)",level:85},
                {label:"AI & LLMs",level:78},
                {label:"Data Visualization",level:80},
                {label:"dbt & Analytics Eng.",level:82},
              ].map(({label,level}) => (
                <div key={label} className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-text-muted">{label}</span>
                    <span className="text-text-dim">{level}%</span>
                  </div>
                  <div className="h-1.5 bg-bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-accent-blue rounded-full" style={{width:`${level}%`}} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
