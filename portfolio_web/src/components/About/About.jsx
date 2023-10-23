import "../../style/about.css";
import Picture from "../../img/Picture.jpg";
const About = () => {
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
    <div className='AboutWrap'>
      <div className='NavBar'>
        <p onClick={AboutPage}>About</p>
        <p onClick={ResumePage}>Resume</p>
        <p onClick={ProjectPage}>Project</p>
        <p onClick={PortfolioPage}>Portfolio</p>
        <p onClick={ContactPage}>Contact</p>
      </div>
      <h1>About Me</h1>
      <div className='MyInfo'>
        <img src={Picture} className='picture' alt='' />
        <div className='content'>
          <p className='Info_Content'>높은 곳에 올라가기 위해 낮은 곳부터 시작하는 개발자 전민찬입니다!</p>
          <p>
            중학교 3학년때 처음 개발에 흥미를 느껴 <br />
            지금 현재 대구소프트웨어마이스터고등학교로 진학해 FE개발자를 꿈꾸고 있습니다.
          </p>
          <p>
            현재는 높은 퀄리티의 FE개발자가 되려 노력중이고 <br />이 목표를 달성하기 위해 JS공부를 하며 React공부와
            병행하는 중입니다.
          </p>
          <h2>🙋🏻How I Work</h2>
          <p className='WorkStyle'>
            1. 목표 달성도 중요하지만 일의 과정에서 재미를 찾는 편이에요.
            <br />
            2. 회사와 세상에 긍정적 영향을 주는 일은 그 자체로 동기부여가 됩니다. <br />
            3. 문제가 생겨도 그 상황 안에서 일을 진행할 수 있는 방향을 찾습니다.
            <br />
            4. 함께 정한 기한은 반드시 지키려고 노력해요.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
