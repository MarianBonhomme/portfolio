import React from 'react'
import { useProject } from '../utils/ProjectContext'
import TitleComponent from './TitleComponent';
import ButtonComponent from './ButtonComponent';

export default function ProjectModalComponent() {
  const { setIsModalVisible, currentProject } = useProject();

  const visitWebsite = (link) => {
    window.open(link, '_blank');
  }

  return (
    <div className="h-full flex items-center">
      <p className='absolute top-0 sm:top-[50px] left-[15px] sm:left-[50px] text-5xl 2xl:text-7xl font-black cursor-pointer' onClick={() => setIsModalVisible(false)}>←</p>
      {currentProject && (
        <>
          <div className='h-full flex sm:hidden flex-col items-center justify-evenly p-[15px] pb-[70px]'>
            <div className='w-full flex flex-col items-center gap-5'>
              <TitleComponent text={currentProject.title}/>
              <div className="flex gap-5">
                {currentProject.technos.map((techno) => (
                  <div key={techno.name} className='flex flex-col items-center'>
                    <img src={`/assets/icons/${techno.name}.${techno.extension}`} className='w-10 mb-2'/>
                    <p className='uppercase text-xxs'>{techno.name}</p>
                  </div>
                ))}
              </div>
              <div className='flex flex-col gap-3 text-xs text-center'>
                {currentProject.paragraphs.map((paragraph, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                ))}
              </div>
            </div>  
            <img src={`/assets/images/${currentProject.mockup}`} className='max-h-[30dvh] w-auto'/>
            {currentProject.link.includes('http') ? (
              <ButtonComponent text="i want to visit" css='mx-auto' clicked={() => visitWebsite(currentProject.link)} />
            ) : (
              <ButtonComponent text={currentProject.link} css='opacity-60 cursor-default mx-auto' />
            )}
          </div>
          <div className='hidden sm:flex lg:hidden items-center gap-[20px]'>
            <div className='w-1/2 flex flex-col items-center'>
                <img src={`/assets/images/${currentProject.mockup}`} className='w-full'/>    
                {currentProject.link.includes('http') ? (
                    <ButtonComponent text="i want to visit" clicked={() => visitWebsite(currentProject.link)} />
                  ) : (
                    <ButtonComponent text={currentProject.link} css='opacity-60 cursor-default' />
                  )}
            </div>
            <div className='w-1/2 flex flex-col gap-10'>
              <TitleComponent text={currentProject.title} css="text-start" />
              <div className="flex gap-8">
                {currentProject.technos.map((techno) => (
                  <div key={techno.name} className='flex flex-col items-center'>
                    <img src={`/assets/icons/${techno.name}.${techno.extension}`} className='w-8 mb-2'/>
                    <p className='uppercase text-xxs'>{techno.name}</p>
                  </div>
                ))}
              </div>
              <div className='flex flex-col gap-5 text-lg'>
                {currentProject.paragraphs.map((paragraph, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                ))}
              </div>
            </div>
          </div>
          <div className='w-full hidden lg:flex justify-center items-center p-[50px] gap-[50px]'>
            <img src={`/assets/images/${currentProject.mockup}`} className='w-1/2 max-w-4xl'/>
            <div className='w-1/2 flex flex-col gap-10 2xl:gap-14'>
              <TitleComponent text={currentProject.title} css="text-start" />
              <div className="flex gap-10">
                {currentProject.technos.map((techno) => (
                  <div key={techno.name} className='flex flex-col items-center'>
                    <img src={`/assets/icons/${techno.name}.${techno.extension}`} className='w-10 2xl:w-14 mb-2'/>
                    <p className='uppercase text-xxs 2xl:text-sm'>{techno.name}</p>
                  </div>
                ))}
              </div>
              <div className='flex flex-col gap-5 text-lg 2xl:text-xl'>
                {currentProject.paragraphs.map((paragraph, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                ))}
              </div>
  
              {currentProject.link.includes('http') ? (
                <ButtonComponent text="i want to visit" css='ml-0' clicked={() => visitWebsite(currentProject.link)} />
              ) : (
                <ButtonComponent text={currentProject.link} css='opacity-60 cursor-default ml-0' />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}