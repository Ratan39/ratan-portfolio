import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ratan Sai Mandela | Data Engineer & AI Builder",
  description:
    "AWS-Certified Data Engineer with 2+ years building scalable ETL pipelines, real-time streaming systems, and AI-powered applications across AWS, GCP, Databricks, and Snowflake.",
  keywords: ["Data Engineer", "AI", "AWS", "GCP", "Databricks", "Snowflake", "PySpark", "dbt"],
  openGraph: {
    title: "Ratan Sai Mandela | Data Engineer & AI Builder",
    description: "Portfolio of Ratan Sai Mandela — Data Engineer & AI Builder",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
