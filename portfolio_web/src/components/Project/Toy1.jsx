import { useNavigate } from "react-router-dom";
import "../../style/project.css";

const ToyOne = () => {
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
    </div>
  );
};

export default ToyOne;
