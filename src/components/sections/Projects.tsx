"use client";
import { useState } from "react";
import { projects } from "@/data/portfolio";

const mainTabs = ["All","Data Engineering","AI","ML"];
const dePlatforms = ["All","AWS","GCP","Databricks","Snowflake"];
const platformColors: Record<string,string> = { AWS:"platform-aws", GCP:"platform-gcp", Databricks:"platform-databricks", Snowflake:"platform-snowflake" };
const tagColors: Record<string,string> = { blue:"tag-blue", green:"tag-green", teal:"tag-teal" };

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const [dePlatform, setDePlatform] = useState("All");
  const [expanded, setExpanded] = useState(false);

  const filtered = projects.filter((p) => {
    if (activeTab === "All") return true;
    if (activeTab === "Data Engineering") {
      if (p.category !== "DE") return false;
      return dePlatform === "All" || p.platform === dePlatform;
    }
    if (activeTab === "AI") return p.category === "AI";
    if (activeTab === "ML") return p.category === "ML";
    return true;
  });
  const displayed = expanded ? filtered : filtered.slice(0, 6);

  return (
    <section id="projects" className="py-24 border-t border-border-subtle bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="section-label mb-2">Portfolio</p>
            <h2 className="text-3xl font-bold text-text-primary" style={{fontFamily:"var(--font-display)"}}>Featured projects</h2>
          </div>
          <span className="text-xs text-text-muted">{filtered.length} projects</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {mainTabs.map((tab) => (
            <button key={tab} onClick={() => { setActiveTab(tab); setDePlatform("All"); }}
              className={`text-xs px-4 py-2 rounded-full border transition-all ${
                activeTab === tab
                  ? "bg-accent-blue text-white border-accent-blue font-medium"
                  : "border-border-default text-text-muted hover:border-accent-blue/40 hover:text-accent-blue bg-white"
              }`}>{tab}</button>
          ))}
        </div>
        {activeTab === "Data Engineering" && (
          <div className="flex flex-wrap gap-2 mb-6 pl-1">
            <span className="text-xs text-text-dim self-center mr-1">Platform:</span>
            {dePlatforms.map((p) => (
              <button key={p} onClick={() => setDePlatform(p)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                  dePlatform === p
                    ? "bg-accent-teal/10 text-accent-teal border-accent-teal/40 font-medium"
                    : "border-border-subtle text-text-dim hover:border-accent-teal/30 hover:text-accent-teal bg-white"
                }`}>{p}</button>
            ))}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {displayed.map((project) => (
            <div key={project.id} className="bg-white border border-border-subtle rounded-xl p-5 card-hover flex flex-col gap-3 shadow-sm">
              <div className="flex items-start justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  <span className={`text-xs px-2.5 py-1 rounded-full ${tagColors[project.tagColor] || "tag-blue"}`}>{project.tag}</span>
                  {project.platform && (
                    <span className={`text-xs px-2.5 py-1 rounded-full ${platformColors[project.platform] || ""}`}>{project.platform}</span>
                  )}
                </div>
                <div className="flex gap-2 shrink-0">
                  {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-xs text-accent-green hover:underline font-medium">Live ↗</a>}
                  {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs text-text-muted hover:text-accent-blue transition-colors">GitHub ↗</a>}
                </div>
              </div>
              <p className="text-xs text-text-dim">{project.context}</p>
              <h3 className="text-sm font-semibold text-text-primary leading-snug" style={{fontFamily:"var(--font-display)"}}>{project.title}</h3>
              <p className="text-xs text-text-muted leading-relaxed flex-1">{project.oneLiner}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.stack.slice(0,5).map((s) => (
                  <span key={s} className="text-xs px-2 py-0.5 bg-bg-secondary border border-border-subtle text-text-dim rounded-md">{s}</span>
                ))}
                {project.stack.length > 5 && <span className="text-xs text-text-dim px-2 py-0.5">+{project.stack.length - 5}</span>}
              </div>
              <div className="border-t border-border-subtle pt-3">
                <p className="text-xs text-accent-green font-medium">↑ {project.impact}</p>
              </div>
            </div>
          ))}
        </div>
        {filtered.length > 6 && (
          <div className="text-center">
            <button onClick={() => setExpanded(!expanded)}
              className="text-xs px-6 py-2.5 border border-border-default rounded-full text-text-muted hover:border-accent-blue/40 hover:text-accent-blue transition-colors bg-white">
              {expanded ? "Show less" : `Show all ${filtered.length} projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
