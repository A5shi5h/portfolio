'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import ParallaxWrapper from '@/components/ParallaxWrapper';
import ContentContainer from '@/components/ContentContainer';

export default function Home() {
  return (
    <div className="relative">
      <ParallaxWrapper>
        <Hero />
      </ParallaxWrapper>
      <ContentContainer>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </ContentContainer>
    </div>
  );
}
