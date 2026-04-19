import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Visualization from "@/components/sections/Visualization";
import Certifications from "@/components/sections/Certifications";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Chatbot from "@/components/chatbot/Chatbot";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg-primary">
      <Navbar />
      <Hero />
      <Projects />
      <Visualization />
      <Certifications />
      <Experience />
      <Contact />
      <Chatbot />
    </main>
  );
}
