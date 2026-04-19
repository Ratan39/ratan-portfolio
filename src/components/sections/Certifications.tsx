"use client";
import { certifications } from "@/data/portfolio";

const platformColors: Record<string,string> = {
  "DataCamp": "tag-green",
  "Coursera · UC Davis": "tag-blue",
  "Coursera · University of Illinois": "tag-blue",
  "Coursera": "tag-blue",
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 border-t border-border-subtle bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="section-label mb-2">Credentials</p>
          <h2 className="text-3xl font-bold text-text-primary" style={{fontFamily:"var(--font-display)"}}>Certifications & learning</h2>
        </div>
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="px-3 py-1 rounded-full bg-accent-amber/10 border border-accent-amber/25 text-accent-amber text-xs font-medium">Industry certifications</div>
            <span className="text-xs text-text-dim">Vendor-issued · Proctored exams</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.industry.map((cert) => (
              <div key={cert.name} className="bg-white border border-border-subtle rounded-xl p-6 card-hover relative overflow-hidden shadow-sm">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-amber/60 via-accent-amber/20 to-transparent" />
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-amber/10 border border-accent-amber/20 flex items-center justify-center shrink-0">
                    <span className="text-accent-amber font-bold text-xs">AWS</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-sm font-semibold text-text-primary leading-snug" style={{fontFamily:"var(--font-display)"}}>{cert.name}</h3>
                      <span className="tag-amber text-xs px-2 py-0.5 rounded-full shrink-0">{cert.level}</span>
                    </div>
                    <p className="text-xs text-text-muted mb-3">{cert.issuer}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-text-dim mb-3">
                      <span>Issued: <span className="text-text-muted">{cert.issued}</span></span>
                      {cert.expires && <span>Expires: <span className="text-text-muted">{cert.expires}</span></span>}
                    </div>
                    {cert.credentialId && <p className="text-xs text-text-dim mb-3 font-mono">ID: {cert.credentialId}</p>}
                    <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-accent-blue hover:underline font-medium">Verify credential ↗</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/25 text-accent-purple text-xs font-medium">Courses & continuous learning</div>
            <span className="text-xs text-text-dim">Self-driven growth</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.courses.map((group) => (
              <div key={group.category} className="bg-bg-secondary border border-border-subtle rounded-xl p-5">
                <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">{group.category}</h3>
                <div className="flex flex-col gap-3">
                  {group.items.map((item) => (
                    <div key={item.name} className="flex items-start justify-between gap-3 pb-3 border-b border-border-subtle last:border-0 last:pb-0">
                      <div className="flex-1">
                        <p className="text-xs font-medium text-text-primary mb-1 leading-snug">{item.name}</p>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${platformColors[item.platform] || "tag-teal"}`}>{item.platform}</span>
                          <span className="text-xs text-text-dim">{item.completed}</span>
                        </div>
                      </div>
                      <a href={item.verifyUrl} target="_blank" rel="noopener noreferrer"
                        className="text-xs text-text-dim hover:text-accent-blue transition-colors shrink-0 font-medium">View ↗</a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
