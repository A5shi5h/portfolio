'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const imageWrapper = imageRef.current;
    const container = containerRef.current;
    const section = sectionRef.current;

    if (!imageWrapper || !container || !section) return;

    // Image zoom effect
    gsap.to(imageWrapper, {
      scale: 1.2,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Parallax effect for the entire hero section
    gsap.to(section, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="fixed top-0 left-0 w-full min-h-screen bg-white dark:bg-gray-900 overflow-hidden z-0"
    >
      <div 
        ref={containerRef} 
        className="relative min-h-screen flex items-center"
      >
        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2">
          {/* Left Column - Logo and Text */}
          <div className="flex flex-col justify-center px-8 lg:px-16 py-20 lg:py-0">
            {/* Logo */}
            <div className="mb-12">
              <svg viewBox="0 0 100 100" className="w-16 h-16">
                <path
                  d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                />
              </svg>
            </div>
            
            {/* Name */}
            <div className="space-y-6 z-10">
              <h1 className="text-[clamp(4rem,12vw,9rem)] font-bold leading-[0.85] tracking-tighter max-[450px]:text-[clamp(2.4rem,9vw,9rem)]">
                ASHISH
                <br />
                LAMICHANEY
              </h1>
            </div>
          </div>

          {/* Right Column - Portrait Image */}
          <div className="relative h-[80vh] lg:h-screen">
            <div ref={imageRef} className="absolute inset-0">
              <Image
                src="/images/image.jpeg"
                alt="Portrait"
                fill
                className="object-cover object-[center_20%] grayscale contrast-125 z-9"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Left edge gradient for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/80 dark:from-gray-900/80 via-transparent to-transparent w-1/3 lg:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
