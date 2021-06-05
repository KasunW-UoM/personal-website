import React from "react";

const Prices = () => {
  const [header] = React.useState({
    mainHeader: "Skills details...",
    subHeading: "MY EXPRIENCES",
    text:
      "Below are My Various Expriences .",
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "2nd Year Project-OnCall SYSTEM ",
      price: "5 member Team work",
      msg1: "FrountEnd -: ReactJS",
      msg2: "BackEnd -:NodeJS",
      msg3: "MongoDB Databases",
      msg4: "My PART is customer user profile,requst order and feedback Option",
      msg5: "https://oncallweb.herokuapp.com/",
    },
    {
      id: 2,
      heading: "1st Year Hardware Project-KWH Machine",
      price: "5 member Team work",
      msg1: "C Programming language Using Atmel studio",
      msg2: "Atmega 32 chip working out this project",
      msg3: "My Hardware Componets is tool Box ",
      msg4: "My part is RTC Module connect the project",
      msg5: "and,Crate the Cording part this module",
    },
    {
      id: 3,
      heading: "Stock Data Entry Operator in John Kells Group ",
      price: "Kells Super Market Dept.IT ",
      msg1: "Sep 2017 – Feb 2018",
      msg2: "SAP stock system handling",
      msg3: "Improved communication skills",
      msg4: "Collaborated with staff and customers",
      msg5: "Manage cover day today activities",
    },
  ]);
  return (
    <div className="prices">
      <div className="container">
        <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          {state.map((prices) => (
            <div className="col-4" key={prices.id}>
              <div className="price">
                <div className="priceHeading">{prices.heading}</div>
                <div className="price__rs">
                  <span></span>
                  {prices.price}
                </div>
                <ul>
                  <li>{prices.msg1}</li>
                  <li>{prices.msg2}</li>
                  <li>{prices.msg3}</li>
                  <li>{prices.msg4}</li>
                  <li>{prices.msg5}</li>
                </ul>
                <div className="price__btn">
                  <a href="" className="btn btn-outline">
                    Purchase
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prices;
