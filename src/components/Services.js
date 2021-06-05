import React from "react";
import {
  FaGithub,
  FaCamera,
  FaCircleNotch,
  FaApple,
  FaFileVideo,
  FaSearchDollar,
} from "react-icons/fa";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "SERVICES",
    subHeading: "My Services",
    text:
      "I did my 2nd year project at the university with Milenium IT ESP Company. I got menterim from that company, which enabled me to gain a lot of knowledge and study Web Development.In addition, I did a hardware project in the 1st year, where I was able to use C programming with Atmega32.I studied CSS, CSCC and Bootstraps as Desing for them.Also, I have been doing group class and individual class in the tuition field for about 4 years now and I am teaching advanced logic.",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "Web Development",
      text:
        "I do web development primarily from the MERN stack, that is, from the front-end Reactjs, Expressjs and Backend NodeJs. The database is done by MongoDB.Back-end is focused on the internal hardware that the makes product run, while front-end is focused on the components that allow the user to interact with the software.MERN is an acronym used to describe a specific set of JavaScript based technologies that are used in the web application development process.",
    },
    {
      id: 2,
      icon: <FaCamera className="commonIcons" />,
      heading: "Photography",
      text:
        "Over the recent months we’ve been presenting various showcases of photography – while many readers hated the showcases, most readers found them inspirational and perfect for a lousy workday’s morning. However, what we should have done in the inspirational posts is not just provide you with some inspiration for your work, but also present useful photographic techniques which can help you to achieve optimal pictures for your designs. ",
    },
    {
      id: 3,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "Web Desing",
      text:
        "Web improvement encompasses a gigantic arrangement of rules and procedures each site engineer should think about. Sometime in the past HTML5, CSS3, JavaScript, PHP, and MySQL were utilized to be the fundamental web improvement advances to build up a site or web application. In any case, with the rise of a few new web improvement advances, instruments, structures, and dialects over the most recent couple of years.    (and what to skip) ",
    },
    {
      id: 4,
      icon: <FaApple className="commonIcons" />,
      heading: "App Devlopment",
      text:
        "As global smartphone device usage hikes higher and higher, it’s not difficult to predict that everything in the near future is going to be possible from the palm of one’s hand. In fact, we’re almost there – with the Internet of Things and on-demand services, the lifestyle of the average person significantly revolves around smartphone devices.",
    },
    {
      id: 5,
      icon: <FaFileVideo className="commonIcons" />,
      heading: "Video Editing",
      text:
        "Hi, a skilled Video Editor and Graphic Designer with 4 years of experience. I can take care of your promotions, commercials, intros, films, short clips, music videos, marketing videos, and a lot of other types of videos.\ Make sure will get fully satisfied.I've true passion and skills on what I do for my clients with a unique and creative approach towards every projects. I undertakes.",
    },
    {
      id: 6,
      icon: <FaSearchDollar className="commonIcons" />,
      heading: "Tution Teacher",
      text:
        "I am an undergraduate student of university Of Moratuwa.My degree type is Bsc. software engineering. I have a good knowledge of mathematics and I can guide students very well on online platform.Theory,Revision & Paper Discussion Classes can be conducted based on your choice.I have a good experience and good methodology to your success.Specially any..",
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
