import { useNavigate } from "react-router-dom";
import "../../style/project.css";
const Project = () => {
  const AboutPage = () => {
    navigate("/About");
  };

  const ProjectPage = () => {
    navigate("Project");
  };

  const ResumePage = () => {
    navigate("Resume");
  };

  const PortfolioPage = () => {
    navigate("Portfolio");
  };

  const ContactPage = () => {
    navigate("Contact");
  };
  const TeamProjectPage = () => {
    navigate("Project/Team");
  };

  const navigate = useNavigate();

  return (
    <div className="ProjectWrap">
      <div className="NavBar">
        <p onClick={AboutPage}>About</p>
        <p onClick={ResumePage}>Resume</p>
        <p onClick={ProjectPage}>Project</p>
        <p onClick={PortfolioPage}>Portfolio</p>
        <p onClick={ContactPage}>Contact</p>
      </div>
      <h1>Project</h1>
      <div className="ProjectType">
        <span className="toy">Toy Project</span>
        <span className="team" onClick={TeamProjectPage}>
          Team Project
        </span>
      </div>
      <div className="ToyProject">
        <div className="project">
          <div
            className="toy1"
            onClick={() => {
              navigate("/Project/Toy/1");
            }}
          >
            <div className="projectTitle" id="toy1">
              To-Do List
            </div>
          </div>
          <div className="toy2">toy2</div>
        </div>
        <div className="next">
          <span className="nextmenu"></span>
          <span className="nextmenu"></span>
          <span className="nextmenu"></span>
          <span className="nextmenu"></span>
        </div>
      </div>
    </div>
  );
};

export default Project;
