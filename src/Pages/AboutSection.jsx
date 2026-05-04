import React, { useState, useEffect } from 'react'
import LogoLoop from '@/components/Animation/LogoLoop/LogoLoop'
import TiltedCard from '../components/Animation/Tilted/TiltedCard';

// Mga Images mo sa assets
import skill1 from '../assets/photos/skills1.jpg';
import skill2 from '../assets/photos/skill2.jpg';

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

const PersonalSkills = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 1024);
    checkSize(); 
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  // Responsive sizes: 160px sa mobile para magkasya yung dalawang card magkatabi
  const cardSize = isMobile ? "160px" : "450px";

  return (
    <section
      id="about"
      /* h-auto sa mobile para mag-scroll, lg:min-h-screen sa desktop */
      className="h-auto flex flex-col justify-start bg-gray-100 overflow-x-hidden relative lg:pb-20"
    >
      
      {/* --- 🟢 MAIN CONTENT AREA --- */}
      <div className="flex-1 flex flex-col lg:flex-row px-6 pt-12 lg:px-12 lg:pt-20 z-10 relative">

        {/* LEFT SIDE: Heading & Text */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-8xl lg:text-[170px] font-bold text-gray-500 tracking-[-0.1em] leading-[0.8]">
            <span className="block text-gray-400">My</span>
            <span className="block text-gray-700">Personal Skills</span>
          </h1>

          <div className="mt-8 space-y-5 max-w-xl text-gray-800">
            <p className="font-poppins text-xs md:text-sm leading-relaxed">
              I started my journey in tech as an IT Assistant at an ISP company. 
              This foundation helped me develop a strong grasp of technical systems and user needs.
            </p>

            <div className="border-l-4 border-[#e93f00] pl-4 py-1 bg-white/50 rounded-r-md">
              <p className="font-bold uppercase tracking-wider text-lg md:text-xl text-[#e93f00] mb-1">Strengths:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs md:text-sm font-medium">
                <li>• Problem-solving mindset</li>
                <li>• Fast learner</li>
                <li>• Attention to detail</li>
                <li>• Technical Adaptability</li>
              </ul>
            </div>

            <button className="mt-4 bg-[#e93f00] text-white text-[10px] md:text-sm font-bold uppercase tracking-widest py-3 px-8 md:py-4 md:px-10 rounded-full hover:bg-[#c73600] transition-all shadow-lg active:scale-95">
              View Projects
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Cards & Key Area Block */}
        <div className="flex-1 flex flex-col items-start z-20 mt-12 lg:mt-0">
          
          {/* CARDS WRAPPER (Magkatabi) */}
          <div className="flex flex-row justify-center lg:justify-start gap-3 md:gap-10 mb-8 w-full">
            <div className="lg:sticky lg:top-10 transform lg:-translate-x-6">
              <TiltedCard
                imageSrc={skill1}
                altText="Skill Card 1"
                containerHeight={cardSize}
                containerWidth={cardSize}
                imageHeight={cardSize}
                imageWidth={cardSize}
                rotateAmplitude={12}
                scaleOnHover={1.05}
                displayOverlayContent
                overlayContent={<p className="text-[10px] text-white bg-black/40 p-1 rounded">IT Setup</p>}
              />
            </div>

            <div className="lg:sticky lg:top-10 transform lg:-translate-x-6">
              <TiltedCard
                imageSrc={skill2}
                altText="Skill Card 2"
                containerHeight={cardSize}
                containerWidth={cardSize}
                imageHeight={cardSize}
                imageWidth={cardSize}
                rotateAmplitude={12}
                scaleOnHover={1.05}
                displayOverlayContent
                overlayContent={<p className="text-[10px] text-white bg-black/40 p-1 rounded">Frontend</p>}
              />
            </div>
          </div>

          {/* KEY AREA BLOCK */}
          <div className="border-l-4 border-[#e93f00] pl-4 py-4 bg-white/70 backdrop-blur-sm rounded-r-md 
                        w-full max-w-[900px] shadow-sm mt-4 lg:mt-10">
            <p className="font-bold uppercase tracking-wider text-lg md:text-xl text-[#e93f00] mb-2">Key Area:</p>
            <p className="text-[11px] md:text-sm lg:text-base text-gray-700 leading-relaxed">
              Over time, I learned the fundamentals of HTML, CSS, and JavaScript, and I am now focusing on building projects using React. Currently, I am continuously improving my skills through self-study, online resources, and hands-on practice by creating personal projects.
              <span className="block mt-4">
                My goal is to become a job-ready full stack developer and contribute to real-world projects where I can add value and continue growing in the field.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* --- 🔵 FOOTER LOGO LOOP --- */}
      <div className="w-full py-8 lg:py-12 z-30 mt-10 relative lg:-top-10">
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={isMobile ? 35 : 50}
          gap={isMobile ? 40 : 80}
          scaleOnHover
          fadeOut
          fadeOutColor="#f3f4f6"
        />
      </div>
      
    </section>
  )
}

export default PersonalSkills;