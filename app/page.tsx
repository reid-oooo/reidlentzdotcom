import Hero from '../components/Hero';
import Industries from '../components/Industries';
import Achievements from '../components/Achievements';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="hero" aria-label="Introduction">
        <Hero />
      </section>
      
      <section id="industries" aria-label="Industry Experience">
        <Industries />
      </section>
      
      <section id="achievements" aria-label="Key Achievements">
        <Achievements />
      </section>
      
      <section id="experience" aria-label="Work Experience">
        <Experience />
      </section>
      
      <section id="skills" aria-label="Platforms and Technologies">
        <Skills />
      </section>
      
      <section id="contact" aria-label="Contact Information">
        <Contact />
      </section>
    </main>
  );
}
