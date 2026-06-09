import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ratan Sai Mandela | Data Engineer & AI/ML Developer",
  description:
    "AWS-Certified Data Engineer with 6+ years building scalable ETL pipelines, Real-time streaming & Batch systems, and AI-powered applications across AWS, GCP, Azure.",
  keywords: ["Data Engineer", "AI", "AWS", "GCP", "Databricks", "Snowflake", "PySpark", "dbt"],
  openGraph: {
    title: "Ratan Sai Mandela | Data Engineer & AI/ML Developer",
    description: "Portfolio of Ratan Sai Mandela — Data Engineer & AI/ML Developer",
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
