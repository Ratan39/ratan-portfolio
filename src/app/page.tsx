import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Visualization from "@/components/sections/Visualization";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Chatbot from "@/components/chatbot/Chatbot";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg-primary">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Visualization />
      <Certifications />
      <Contact />
      <Chatbot />
    </main>
  );
}

