import "../../style/main.css";

const Main = () => {
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

  return (
    <div className='mainWrap'>
      <div className='NavBar'>
        <p onClick={AboutPage}>About</p>
        <p onClick={ResumePage}>Resume</p>
        <p onClick={ProjectPage}>Project</p>
        <p onClick={PortfolioPage}>Portfolio</p>
        <p onClick={ContactPage}>Contact</p>
      </div>
    </div>
  );
};

export default Main;
