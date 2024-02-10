import React, { useState } from "react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useProject } from "../utils/ProjectContext";
import { useSection } from "../utils/SectionContext";
import TitleComponent from './TitleComponent';
import ButtonComponent from "./ButtonComponent";

export default function SliderComponent() {
  const { projects, setCurrentProject, setIsModalVisible } = useProject();
  const { currentSection } = useSection();

  const [prevButtonVisible, setPrevButtonVisible] = useState(false);
  const [nextButtonVisible, setNextButtonVisible] = useState(true);
  
  const displayProjectDetails = (project) => {
    setCurrentProject(project),
    setIsModalVisible(true);
  }

  const handleSlideChange = (swiper) => {
    setPrevButtonVisible(!swiper.isBeginning);
    setNextButtonVisible(!swiper.isEnd);
  };

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        navigation={{ nextEl: ".arrow-next", prevEl: ".arrow-prev" }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <img src={`/assets/images/${project.img}`} className="absolute top-1/2 -translate-y-[90%] sm:-translate-y-[75%]"/>
            <div className="slide-content absolute top-[50%] sm:top-[60%] 2xl:top-[63%] sm:-left-1/4 w-full sm:w-[150%] lg:-left-1/2 lg:w-[200%] flex flex-col items-center z-50">
              <TitleComponent text={project.title} />
              <p className="text-center text-xxs sm:text-sm 2xl:text-xl leading-loose my-2 xl:my-5">{project.description}</p>
              <ButtonComponent text="see more" clicked={() => displayProjectDetails(project)} />
            </div>
          </SwiperSlide>
        ))}
        <div className={`arrow-prev fixed bottom-[8%] sm:bottom-[15%] left-1/4 z-40 text-5xl 2xl:text-7xl font-black transition-all duration-500 
          ${currentSection === 2 ? 'cursor-pointer' : 'opacity-0'}
          ${!prevButtonVisible && 'opacity-0 cursor-default'}`} >←</div>
        <div className={`arrow-next fixed bottom-[8%] sm:bottom-[15%] right-1/4 z-40 text-5xl 2xl:text-7xl font-black transition-all duration-500 
          ${currentSection === 2 ? 'cursor-pointer' : 'opacity-0'}
          ${!nextButtonVisible && 'opacity-0 cursor-default'}`} >→</div>
      </Swiper>      
    </>
  );
}