import "../../style/main.css";

const Main = () => {
  const About = () => {
    window.location.replace("/About");
  }

  return (
    <div className='mainWrap'>
      <div className='NavBar'>
        <p onClick={About}>About</p>
        <p>Resume</p>
        <p>Portfolio</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Main;
