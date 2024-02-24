import React, { createContext, useContext, useState, useEffect } from "react";
import projectsData from "../projects.json";

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const projects = projectsData;
  const [currentProject, setCurrentProject] = useState(projects[0]);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
