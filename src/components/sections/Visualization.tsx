"use client";
import { useState } from "react";
import Image from "next/image";
import { visualizations } from "@/data/portfolio";

export default function Visualization() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState("");

  return (
    <section id="visualization" className="py-24 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="section-label mb-2">Dashboards</p>
          <h2 className="text-3xl font-bold text-text-primary" style={{ fontFamily: "var(--font-display)" }}>
            Visualization & dashboards
          </h2>
        </div>

        {/* Tableau section */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/25 text-accent-blue text-xs font-medium">
              Tableau Public
            </div>
            <span className="text-xs text-text-dim">Interactive — click to explore</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {visualizations.tableau.map((dash) => (
              <div key={dash.title} className="bg-bg-secondary border border-border-subtle rounded-xl overflow-hidden card-hover">
                <div className="p-5 border-b border-border-subtle">
                  <h3 className="text-sm font-semibold text-text-primary mb-1" style={{ fontFamily: "var(--font-display)" }}>
                    {dash.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">{dash.description}</p>
                </div>
                <div className="relative bg-bg-primary" style={{ height: "340px" }}>
                  <iframe
                    src={`${dash.embedUrl}?:embed=yes&:showVizHome=no&:tabs=no&:toolbar=yes`}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                    title={dash.title}
                  />
                </div>
                <div className="px-5 py-3 flex justify-end">
                  <a
                    href={dash.publicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent-blue hover:underline"
                  >
                    Open in Tableau ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Power BI section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="px-3 py-1 rounded-full bg-accent-amber/10 border border-accent-amber/25 text-accent-amber text-xs font-medium">
              Power BI
            </div>
            <span className="text-xs text-text-dim">Click any dashboard to expand</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {visualizations.powerbi.map((dash) => (
              <div
                key={dash.title}
                className="bg-bg-secondary border border-border-subtle rounded-xl overflow-hidden card-hover cursor-pointer group"
                onClick={() => { setLightboxImg(dash.image); setLightboxTitle(dash.title); }}
              >
                <div className="relative overflow-hidden" style={{ height: "180px" }}>
                  <Image
                    src={dash.image}
                    alt={dash.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-xs text-white bg-black/50 px-3 py-1.5 rounded-full">Click to expand</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xs font-semibold text-text-primary mb-1.5" style={{ fontFamily: "var(--font-display)" }}>
                    {dash.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed mb-3">{dash.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {dash.tools.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 bg-bg-tertiary border border-border-subtle text-text-dim rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <div className="relative max-w-5xl w-full rounded-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="bg-bg-secondary px-5 py-3 flex items-center justify-between border-b border-border-subtle">
              <span className="text-sm text-text-primary font-medium">{lightboxTitle}</span>
              <button onClick={() => setLightboxImg(null)} className="text-text-muted hover:text-text-primary text-lg leading-none">✕</button>
            </div>
            <div className="relative" style={{ height: "70vh" }}>
              <Image src={lightboxImg} alt={lightboxTitle} fill className="object-contain" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
