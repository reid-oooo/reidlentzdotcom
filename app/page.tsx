import Hero from '../components/Hero';
import Achievements from '../components/Achievements';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Achievements />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
