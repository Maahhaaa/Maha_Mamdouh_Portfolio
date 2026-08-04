import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const PixelBackground = dynamic(() => import('@/components/PixelBackground'), { ssr: false });

export default function Home() {
  return (
    <>
      <PixelBackground />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
