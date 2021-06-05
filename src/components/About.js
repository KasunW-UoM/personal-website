import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      "I am an energetic, straight forward and passionate undergraduate with an outstanding academic performance.I am interested in network engineering and software engineering. Also I have some interest in cyber security, data science.I always like to take problems as challenges and solve creatively and efficiently, individually or working as a team.With this, I am looking forward to the opportunities which suit for undergraduate level.",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Kasun Weerasekara" },
    { id: 2, title: "Email:", text: "kasunmadulal@gmail.com" },
    { id: 3, title: "Phone:", text: "0702994459" },
    { id: 4, title: "Linkedin", text: "kasun Weerasekara" },
    { id: 5, title: "GitHub", text: "KasunW-UoM" },
    { id: 6, title: "HackerRank", text: "kasun madulal" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/man-01.jpg" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
                I am an Advanced Level mathemetices Student (Combined Maths,Physices and chemistry)and Currently a third year Undergraduate Student in the faculty of information Technology ,University of Moratuwa.
              </div>
              <div className="about__info-p2">
                And,My Second year software project is OnCall Servive Platform.The project is given by Milenium IT ESP Company for us.joining with that company caused to increace my Knowlage.And 1st year hardware project is KWH Server machine.
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
