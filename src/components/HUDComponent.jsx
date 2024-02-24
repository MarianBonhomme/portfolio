import React from 'react'
import { Link } from 'react-scroll'
import { useSection } from '../utils/SectionContext'

export default function HUDComponent({ scrollToSection }) {
  const { currentSection } = useSection();

  const checkSection = (sectionId) => {
    if (sectionId > 0 && sectionId < 4) {
      scrollToSection(sectionId);
    }
  }

  const visitWebsite = (link) => {
    window.open(link, '_blank');
  }

  return (
    <>
      <div className="fixed top-[15px] left-[15px] sm:top-[25px] sm:left-[25px] xl:top-[50px] xl:left-[50px] 2xl:top-[70px] 2xl:left-[70px] z-40">
        <span className="text-5xl sm:text-6xl 2xl:text-8xl font-cera tracking-tighter cursor-pointer" onClick={() => scrollToSection(1)}>MB</span>
      </div>
      <nav className="fixed top-[15px] right-[15px] sm:top-[25px] sm:right-[25px] xl:top-[50px] xl:right-[50px] 2xl:top-[70px] 2xl:right-[70px] z-40">
        <ul className="flex flex-col sm:flex-row gap-[15px] sm:gap-[50px] text-lg sm:text-xl 2xl:text-3xl">
          <li className='cursor-pointer' onClick={() => scrollToSection(2)}>Projects</li>
          <li className='cursor-pointer' onClick={() => scrollToSection(3)}>Contact</li>
        </ul>
      </nav> 
      <ul className="fixed bottom-[15px] left-[15px] sm:bottom-[25px] sm:left-[25px] xl:bottom-[50px] xl:left-[50px] 2xl:bottom-[70px] 2xl:left-[70px] z-40">
        <li><img src="/assets/icons/github.png" alt="github" className="cursor-pointer w-6 2xl:w-10" onClick={() => visitWebsite("https://github.com/MarianBonhomme")} /></li>
        <li><img src="/assets/icons/instagram.svg" alt="instagram" className="cursor-pointer w-6 2xl:w-10 mt-6 2xl:mt-10" onClick={() => visitWebsite("https://www.instagram.com/marian.bnhm/")} /></li>
        <li><img src="/assets/icons/linkedin.svg" alt="linkedin" className="cursor-pointer w-6 2xl:w-10 mt-6 2xl:mt-10" onClick={() => visitWebsite("https://www.linkedin.com/in/marian-bonhomme-developpeur-montpellier/")} /></li>
      </ul>
      <div className="fixed bottom-[15px] right-[15px] sm:bottom-[25px] sm:right-[25px] xl:bottom-[50px] xl:right-[50px] 2xl:bottom-[70px] 2xl:right-[70px] z-40 flex flex-col items-center gap-1">
        <p className={`-rotate-90 text-3xl 2xl:text-5xl ${currentSection < 2 ? 'opacity-0' : 'cursor-pointer'}`} onClick={() => checkSection(currentSection - 1)}>›</p>       
        <p className='text-4xl sm:text-5xl 2xl:text-7xl tracking-tighter'>0{currentSection}</p>
        <p className={`rotate-90 text-3xl 2xl:text-5xl ${currentSection > 2 ? 'opacity-0' : 'cursor-pointer'}`} onClick={() => checkSection(currentSection + 1)}>›</p>
      </div>
    </>
  )
}