import React, { useState } from "react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useProject } from "../utils/ProjectContext";
import TitleComponent from './TitleComponent';
import ButtonComponent from "./ButtonComponent";

export default function SliderComponent() {
  const { projects, setCurrentProject, setIsModalVisible } = useProject();

  const [prevButtonVisible, setPrevButtonVisible] = useState(false);
  const [nextButtonVisible, setNextButtonVisible] = useState(true);

  const handleSlideChange = (swiper) => {
    const currentProjectIndex = swiper.activeIndex;
    setCurrentProject(projects[currentProjectIndex]);
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
            <img src={`/assets/images/${project.img}`} className="absolute top-1/2 -translate-y-[120%] sm:-translate-y-[75%]" alt={project.title}/>
            <div className="slide-content absolute top-[45%] sm:top-[60%] 2xl:top-[63%] sm:-left-1/4 w-full sm:w-[150%] lg:-left-1/2 lg:w-[200%] flex flex-col items-center z-50">
              <TitleComponent text={project.title} />
              <p className="text-center text-sm 2xl:text-xl leading-loose my-2 xl:my-5">{project.description}</p>
              <ButtonComponent text="see more" clicked={() => setIsModalVisible(true)} />
            </div>
          </SwiperSlide>
        ))}
        <div className={`arrow-prev fixed bottom-[12%] left-1/4 z-40 text-5xl 2xl:text-7xl font-black cursor-pointer transition-all duration-500 
          ${!prevButtonVisible && 'opacity-0 cursor-default'}`} >←</div>
        <div className={`arrow-next fixed bottom-[12%] right-1/4 z-40 text-5xl 2xl:text-7xl font-black cursor-pointer transition-all duration-500 
          ${!nextButtonVisible && 'opacity-0 cursor-default'}`} >→</div>
      </Swiper>      
    </>
  );
}