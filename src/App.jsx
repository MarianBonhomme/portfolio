import { useEffect, useState } from "react";
import { Element, scroller } from "react-scroll";
import ContactDataComponent from "./components/ContactDataComponent";
import ContactFormComponent from "./components/ContactFormComponent";
import HUDComponent from "./components/HUDComponent";
import ProjectModalComponent from "./components/ProjectModalComponent";
import SliderComponent from "./components/SliderComponent";
import { useProject } from "./utils/ProjectContext";
import { useSection } from "./utils/SectionContext";

export default function App() {
  const { isModalVisible } = useProject();
  const { setCurrentSection } = useSection();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    scrollToSection(1);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sections = document.querySelectorAll(".section");

      let currentSectionIndex = 1;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSectionIndex = index + 1;
        }
      });

      setCurrentSection(currentSectionIndex);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    scroller.scrollTo(`section-${sectionId}`, {
      duration: 800,
      smooth: "easeOutQuint",
    });
  };

  return (
    <div className="bg-dark text-white text-shadow font-merriwether tracking-widest select-none relative">
      <div
        className="mouse"
        style={{ left: mousePosition.x + "px", top: mousePosition.y + "px" }}
      ></div>

      <HUDComponent scrollToSection={scrollToSection} />

      <Element
        id="section-1"
        className="section h-screen flex flex-col justify-center items-center relative z-10"
      >
        <h1 className="text-7xl sm:text-9xl md:text-10xl 2xl:text-11xl font-cera tracking-tighter">
          PORTFOLIO
        </h1>
        <h2 className="text-xs sm:text-lg md:text-xl 2xl:text-2xl text-center italic">
          Développeur Web - Marian Bonhomme
        </h2>
      </Element>

      <Element
        id="section-2"
        className="section h-screen flex justify-center items-center relative z-10"
      >
        <SliderComponent />
      </Element>

      <Element
        id="section-3"
        className="section h-screen flex justify-center items-center relative z-10"
      >
        <div className="xl:w-1/2 flex justify-end items-center xl:pr-10">
          <ContactDataComponent />
        </div>
        <div className="w-1/2 hidden xl:flex justify-start items-center pl-10">
          <ContactFormComponent />
        </div>
      </Element>

      <div
        className={`fixed top-0 h-screen w-screen z-50 bg-dark transition-all duration-300 ${
          isModalVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ProjectModalComponent />
      </div>
    </div>
  );
}
