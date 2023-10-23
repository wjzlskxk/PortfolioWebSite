import "../../style/main.css";

const Main = () => {
  const About = () => {
    window.location.replace("/About");
  };

  const Project = () => {
    window.location.replace("/Project");
  };

  return (
    <div className='mainWrap'>
      <div className='NavBar'>
        <p onClick={About}>About</p>
        <p>Resume</p>
        <p onClick={Project}>Project</p>
        <p>Portfolio</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Main;
