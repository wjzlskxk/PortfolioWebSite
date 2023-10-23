import { useState } from "react";
import "../../style/project.css";
const Project = () => {
  const AboutPage = () => {
    window.location.replace("/About");
  };

  const ProjectPage = () => {
    window.location.replace("/Project");
  };

  const ResumePage = () => {
    window.location.replace("/Resume");
  };

  const PortfolioPage = () => {
    window.location.replace("/Portfolio");
  };

  const ContactPage = () => {
    window.location.replace("Contact");
  };
  const TeamProjectPage = () => {
    window.location.replace("/Project/Team");
  };

  return (
    <div className='ProjectWrap'>
      <div className='NavBar'>
        <p onClick={AboutPage}>About</p>
        <p onClick={ResumePage}>Resume</p>
        <p onClick={ProjectPage}>Project</p>
        <p onClick={PortfolioPage}>Portfolio</p>
        <p onClick={ContactPage}>Contact</p>
      </div>
      <h1>Project</h1>
      <div className='ProjectType'>
        <span className='toy'>Toy Project</span>
        <span className='team' onClick={TeamProjectPage}>
          Team Project
        </span>
      </div>
      <div className='ToyProject'>
        <div className='project'>
          <div className='toy1'>
            <div className='projectTitle' id='toy1'>
              To-Do List
            </div>
          </div>
          <div className='toy2'>toy2</div>
        </div>
        <div className='next'>
          <span className='nextmenu'></span>
          <span className='nextmenu'></span>
          <span className='nextmenu'></span>
          <span className='nextmenu'></span>
        </div>
      </div>
    </div>
  );
};

export default Project;
