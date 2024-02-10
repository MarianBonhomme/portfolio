import React, { createContext, useContext, useState, useEffect } from "react";
import projectsData from "../projects.json";

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const projects = projectsData;
  const [currentProject, setCurrentProject] = useState(projects[0]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    preloadImages();
  })
  
  const preloadImages = () => {
    projects.forEach((project) => {
      const image = new Image();
      import(`/assets/images/${project.mockup}`).then((module) => {
        image.src = module.default;
      });
    })
  }

  return (
    <ProjectContext.Provider
      value={{
        projects,
        currentProject,
        setCurrentProject,
        isModalVisible,
        setIsModalVisible,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => {
  return useContext(ProjectContext);
};
