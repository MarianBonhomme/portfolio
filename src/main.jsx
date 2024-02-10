import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProjectProvider } from './utils/ProjectContext.jsx'
import { SectionProvider } from './utils/SectionContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SectionProvider>
      <ProjectProvider>
        <App />
      </ProjectProvider>  
    </SectionProvider> 
  </React.StrictMode>,
)
