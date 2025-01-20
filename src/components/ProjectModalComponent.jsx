import React from "react";
import { useProject } from "../utils/ProjectContext";
import TitleComponent from "./TitleComponent";
import ButtonComponent from "./ButtonComponent";

export default function ProjectModalComponent() {
  const { setIsModalVisible, currentProject } = useProject();

  const visitWebsite = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="h-full flex items-center">
      <p
        className="absolute top-0 sm:top-[50px] left-[15px] sm:left-[50px] text-3xl 2xl:text-5xl font-black cursor-pointer"
        onClick={() => setIsModalVisible(false)}
      >
        ✕
      </p>
      {currentProject && (
        <>
          <div className="h-full flex sm:hidden flex-col items-center justify-evenly p-[15px] pb-[70px]">
            <div className="w-full flex flex-col items-center gap-5">
              <TitleComponent text={currentProject.title} />
              <div className="flex gap-5">
                {currentProject.technos.map((techno) => (
                  <div key={techno.name} className="flex flex-col items-center">
                    <img
                      src={`/assets/icons/${techno.name}.${techno.extension}`}
                      className="w-10 mb-2"
                      alt={techno.name}
                    />
                    <p className="uppercase text-xs">{techno.name}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 text-sm text-center">
                {currentProject.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  ></p>
                ))}
              </div>
            </div>
            <img
              src={`/assets/images/${currentProject.mockup}`}
              className="max-h-[30dvh] w-auto"
              alt={currentProject.title}
            />
            <ButtonComponent text="visit website" css="mx-auto" />
          </div>
          <div className="hidden sm:flex lg:hidden items-center gap-[20px]">
            <div className="w-1/2 flex flex-col items-center">
              <img
                src={`/assets/images/${currentProject.mockup}`}
                className="w-full"
                alt={currentProject.title}
              />
              <ButtonComponent text="visit website" />
            </div>
            <div className="w-1/2 flex flex-col gap-10">
              <TitleComponent text={currentProject.title} css="text-start" />
              <div className="flex gap-8">
                {currentProject.technos.map((techno) => (
                  <div key={techno.name} className="flex flex-col items-center">
                    <img
                      src={`/assets/icons/${techno.name}.${techno.extension}`}
                      className="w-8 mb-2"
                      alt={techno.name}
                    />
                    <p className="uppercase text-xxs">{techno.name}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-5 text-lg">
                {currentProject.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  ></p>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full hidden lg:flex justify-center items-center p-[50px] gap-[50px]">
            <img
              src={`/assets/images/${currentProject.mockup}`}
              className="w-1/2 max-w-4xl"
              alt={currentProject.title}
            />
            <div className="w-1/2 flex flex-col gap-10 2xl:gap-14">
              <TitleComponent text={currentProject.title} css="text-start" />
              <div className="flex gap-10">
                {currentProject.technos.map((techno) => (
                  <div key={techno.name} className="flex flex-col items-center">
                    <img
                      src={`/assets/icons/${techno.name}.${techno.extension}`}
                      className="w-10 2xl:w-14 mb-2"
                      alt={techno.name}
                    />
                    <p className="uppercase text-xxs 2xl:text-sm">
                      {techno.name}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-5 text-lg 2xl:text-xl">
                {currentProject.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  ></p>
                ))}
              </div>
              <ButtonComponent text="visit website" css="ml-0" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
