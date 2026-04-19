"use client";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `You are a casual, friendly portfolio assistant for Ratan Sai Mandela, a Data Engineer and AI Builder with 2+ years of experience. Answer questions about his background, skills, projects, certifications and experience using only the information below. Be conversational, warm and concise. Keep answers under 4 sentences unless more detail is asked. If you don't know something from the provided info, say so honestly.

=== ABOUT RATAN ===
Full name: Ratan Sai Mandela
Title: Data Engineer & AI Builder
Location: St. Louis, MO
Education: Master of Science in Computer Science, Saint Louis University (Jan 2024 – Dec 2025)
Email: mandelaratansai1@mail.com
LinkedIn: linkedin.com/in/ratan-sai-mandela-72045a217
GitHub: github.com/Ratan39
Job Status: Actively seeking roles in Data Engineering, AI, and Data Analytics

=== SUMMARY ===
AWS-Certified Data Engineer with 2+ years of experience designing high-performance ETL pipelines and scalable analytics platforms. Expert in orchestrating complex workflows using AWS Step Functions, AppFlow, and Redshift, with a specialized focus on CI/CD automation via GitHub Actions. Proven track record of transforming unstructured data into multi-million-dollar business value through secure, audit-compliant data lifecycles. Proficient in building automated RCM engines and HIPAA-standard EDI pipelines, with deep proficiency in clinical-to-code mapping using NLP.

=== WORK EXPERIENCE ===
1. Research Assistant – Saint Louis University (Aug 2025 – Present)
- Engineered automated clinical-to-code mapping engine extracting ICD-10 and CPT codes from unstructured clinical notes using NLP, achieving 88% F1-score
- Implemented RAG framework with ChromaDB for high-fidelity clinical context
- Fine-tuned MedGemma on domain-specific healthcare datasets
- Implemented RLHF with corrections from professional medical coders
- Visualized RCM Performance KPIs using Streamlit

2. Data Engineer – Teach For India, Hyderabad (Apr 2021 – Aug 2023)
- Designed ETL pipeline using AWS AppFlow to ingest Salesforce Campaign and Fundraiser data
- Orchestrated workflows via AWS Step Functions with automated retry logic
- Automated CI/CD using GitHub Actions for Glue scripts
- Optimized Redshift with Incremental Loading (CDC) → 15% increase in donor retention and $1M additional annual revenue
- Implemented S3 Event Notifications and Lambda for real-time processing of sensitive employee salary files
- Built interactive dashboards in Amazon QuickSight for HR and leadership

=== PROJECTS ===
1. Full Revenue Cycle Management (AI, AWS/NLP)
- Automated clinical-to-code mapping with NLP, RAG, ChromaDB, MedGemma, RLHF, Streamlit
- 88% F1-score on Synthea datasets
- GitHub: github.com/Ratan39/Full-Revenue-Management-Cycle-

2. EduPath AI (AI, Qwen-7B + RAG)
- Agentic platform using Qwen-7B LLM and RAG to simulate graduate student personas
- Multi-tiered Streamlit dashboards converting NLP rationales into marketing insights
- Docker Dev Containers for 100% environment reproducibility
- GitHub: github.com/Ratan39/Digital_twin_using_Qwen_model

3. Lab Abnormalities as Predictors for Chronic Diseases (ML, AWS)
- Predictive healthcare platform on AWS using FHIR data, PySpark, XGBoost, SageMaker
- Live Streamlit app deployed to production
- GitHub: github.com/Ratan39/Lab_Abnormalities_as_predictors_for_chronic_diseases

4. Kafka to MongoDB Spark Streaming (Data Engineering, GCP)
- Stateful real-time pipeline using PySpark Structured Streaming on GCP
- Joins asynchronous order and payment event streams using applyInPandasWithState
- GitHub: github.com/Ratan39/Kafka_to_MongoDB_Spark_streaming_GCP

5. GCP CI/CD Airline Pipeline (Data Engineering, GCP)
- Serverless GCP pipeline with GitHub Actions CI/CD
- Cloud Composer, Dataproc Serverless, BigQuery warehouse
- GitHub: github.com/Ratan39/GCP-CI-CD-Airlines

6. Databricks Incremental Data Pipeline (Data Engineering, Databricks)
- ETL pipeline using PySpark and Delta Lake with ACID compliance
- CDC-based MERGE strategy for 100% data accuracy
- GitHub: github.com/Ratan39/databricks_event_driven_pipeline

7. Automated E-commerce dbt Pipeline (Data Engineering, Snowflake)
- Multi-layer ELT in Snowflake using dbt, star schema, 8+ automated tests
- GitHub: github.com/Ratan39/dbt_ecommerce

8. dbt + Airflow + Snowflake Finance Pipeline (Data Engineering, Snowflake)
- Orchestrates dbt models through Airflow via Cosmos library with dynamic DAG generation
- GitHub: github.com/Ratan39/dbt-snowflake-airflow

=== SKILLS ===
Data Engineering: Apache Spark, Kafka, Airflow, dbt, AWS Glue, Step Functions, Dataproc, Delta Lake
AI/ML: Python, LangChain, RAG, XGBoost, NLP, MedGemma, RLHF, Streamlit
Cloud: AWS, GCP, Databricks, Snowflake, BigQuery, Redshift, S3, Lambda
Visualization: Tableau, Power BI, QuickSight, Plotly

=== CERTIFICATIONS ===
- AWS Certified Data Engineer – Associate (Issued Apr 9, 2026 · Expires Apr 9, 2029)
- AWS Certified Cloud Practitioner (Foundational)
- DataCamp: Large Language Models (LLMs) Concepts (Sep 2025)
- DataCamp: Supervised Learning with scikit-learn (Nov 2025)
- Coursera (Coursera): Data Analysis Using PySpark (Apr 2023)
- Coursera (UC Davis): Creating Dashboards and Storytelling with Tableau (Jul 2023)
- Coursera (University of Illinois): Digital Marketing Specialization – 7 courses (Dec 2020)`;

const SUGGESTIONS = [
  "What cloud platforms has Ratan worked with?",
  "Tell me about his most impressive project",
  "Does he have real-time streaming experience?",
  "What certifications does he hold?",
  "Is he open to remote work?",
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hey! I'm Ratan's portfolio assistant 👋 Ask me anything about his experience, projects, skills or certifications!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;
    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const history = [...messages, userMsg];
      const geminiContents = history.map((m, i) => {
        const role = m.role === "assistant" ? "model" : "user";
        const text = i === 0 && m.role === "user"
          ? `${SYSTEM_PROMPT}\n\nUser question: ${m.content}`
          : m.content;
        return { role, parts: [{ text }] };
      });

      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

      // Retry up to 3 times with increasing delays for 429 rate limit errors
      let res: Response | null = null;
      let lastError = "";
      for (let attempt = 0; attempt < 3; attempt++) {
        if (attempt > 0) {
          // Wait 2s on first retry, 5s on second retry
          const delay = attempt === 1 ? 2000 : 5000;
          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = {
              role: "assistant",
              content: `Rate limit hit — retrying in ${delay / 1000}s... (attempt ${attempt + 1}/3)`,
            };
            return updated;
          });
          await new Promise((r) => setTimeout(r, delay));
        }

        res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: geminiContents,
              generationConfig: { maxOutputTokens: 512, temperature: 0.7 },
              systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
            }),
          }
        );

        if (res.status === 429) {
          lastError = "rate_limit";
          // Remove the retry message before next attempt
          setMessages((prev) => prev.filter((m) => !m.content.startsWith("Rate limit hit")));
          continue;
        }
        break;
      }

      if (!res || res.status === 429) {
        setMessages((prev) => [
          ...prev.filter((m) => !m.content.startsWith("Rate limit hit")),
          { role: "assistant", content: "The API is a bit busy right now — please wait a few seconds and try again!" },
        ]);
        return;
      }

      const data = await res.json();
      const reply =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't get a response right now.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Oops, something went wrong. Try again in a moment!" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div className="chat-panel bg-bg-secondary border border-border-default shadow-2xl">
          {/* Header */}
          <div className="px-4 py-3 bg-bg-secondary border-b border-border-subtle flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-accent-blue/15 border border-accent-blue/25 flex items-center justify-center">
                <span className="text-accent-blue text-xs font-bold">R</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-text-primary">Portfolio Assistant</p>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-green" />
                  <span className="text-xs text-text-dim">Knows everything about Ratan</span>
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-text-muted hover:text-text-primary text-sm leading-none p-1">✕</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3" style={{ maxHeight: "340px", background: "#fff" }}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] text-xs leading-relaxed rounded-xl px-3 py-2.5 ${
                  m.role === "user"
                    ? "bg-accent-blue text-white rounded-br-sm"
                    : "bg-bg-secondary border border-border-subtle text-text-secondary rounded-bl-sm"
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-bg-secondary border border-border-subtle rounded-xl rounded-bl-sm px-3 py-2.5">
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <span key={i} className="w-1.5 h-1.5 rounded-full bg-text-muted animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          {messages.length === 1 && (
            <div className="px-3 pb-2 flex flex-wrap gap-1.5" style={{ background: "#fff" }}>
              {SUGGESTIONS.slice(0, 3).map((s) => (
                <button key={s} onClick={() => sendMessage(s)}
                  className="text-xs px-2.5 py-1.5 rounded-lg border border-border-default text-text-muted hover:border-accent-blue/40 hover:text-accent-blue transition-colors text-left bg-bg-secondary">
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="px-3 pb-3 pt-2 border-t border-border-subtle" style={{ background: "#fff" }}>
            <div className="flex gap-2">
              <input value={input} onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                placeholder="Ask about Ratan's experience..."
                className="flex-1 text-xs bg-bg-secondary border border-border-default rounded-lg px-3 py-2 text-text-primary placeholder:text-text-dim focus:outline-none focus:border-accent-blue/50"
              />
              <button onClick={() => sendMessage(input)} disabled={loading || !input.trim()}
                className="px-3 py-2 bg-accent-blue rounded-lg text-white text-xs font-medium hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating button */}
      <div className="chat-bubble">
        <button
          onClick={() => setOpen(!open)}
          className="w-14 h-14 rounded-full bg-accent-blue hover:bg-accent-blue/90 transition-all shadow-lg flex items-center justify-center relative"
          aria-label="Open portfolio assistant"
        >
          {open ? (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#0D1117" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#0D1117" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
          )}
          {/* Unread dot when closed */}
          {!open && (
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-accent-green border-2 border-bg-primary" />
          )}
        </button>
      </div>
    </>
  );
}
