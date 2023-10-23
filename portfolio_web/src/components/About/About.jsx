import "../../style/about.css";
import Picture from "../../img/Picture.jpg";
const About = () => {
  return (
    <div className='AboutWrap'>
      <div className='NavBar'>
        <p onClick={About}>About</p>
        <p>Resume</p>
        <p>Portfolio</p>
        <p>Contact</p>
      </div>
      <h1>About Me</h1>
      <div className='MyInfo'>
        <img src={Picture} className='picture' />
        <p>높은 곳데 올라가기 위해 낮은 곳부터 시작하는 개발자 전민찬입니다!</p>
      </div>
    </div>
  );
};

export default About;
