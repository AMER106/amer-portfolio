import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import { navItems, profile } from "@/data/portfolio";
import { hasResume } from "@/lib/resume";

export default function Home() {
  const resumeAvailable = hasResume();

  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 bg-accent px-4 py-2 font-medium text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Navbar name={profile.name} items={navItems} resumeAvailable={resumeAvailable} />
      <main id="main">
        <Hero resumeAvailable={resumeAvailable} />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact resumeAvailable={resumeAvailable} />
      </main>
      <Footer />
    </>
  );
}
