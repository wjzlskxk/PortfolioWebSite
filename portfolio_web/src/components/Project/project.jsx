import "../../style/project.css";

const Project = () => {
  const Team = () => {
    window.location.replace("/Project/Team");
  };

  return (
    <div className='ProjectWrap'>
      <div className='NavBar'>
        <p>About</p>
        <p>Resume</p>
        <p>Project</p>
        <p>Portfolio</p>
        <p>Contact</p>
      </div>
      <h1>Project</h1>
      <div className='ProjectType'>
        <span className='toy'>Toy Project</span>
        <span className='team' onClick={Team}>
          Team Project
        </span>
      </div>
    </div>
  );
};

export default Project;
