import React from "react";
import Card from "./Card";

function App() {
  const cardValues = [
    {
      title: "Supervisor",
      desc: "Monitors activty to identify project roadblocks",
      img: "images/icon-supervisor.svg",
      color: "hsl(180, 62%, 55%)",
    },
    {
      title: "Team Builder",
      desc: "Scans our talent network to create the optimal team for your project",
      img: "images/icon-team-builder.svg",
      color: "hsl(0, 78%, 62%)",
    },
    {
      title: "Karma",
      desc: "Regularly evaluates our talent to ensure quality",
      img: "images/icon-karma.svg",
      color: "hsl(34, 97%, 64%)",
    },
    {
      title: "Calulator",
      desc: "Uses data from past projects to provide better delivery estimates",
      img: "images/icon-calculator.svg",
      color: "hsl(212, 86%, 64%)",
    },
  ];

  return (
    <main className="main-background">
      <div className="main-box">
        <div className="main-text-box">
          <h1>Reliable, efficient delivery</h1>
          <h1>Powered by Technology</h1>
          <p>
            Our Artificial intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
        <div className="main-box-container">
          <div className="body-container">
            <Card
              title={cardValues[0].title}
              desc={cardValues[0].desc}
              img={cardValues[0].img}
              color={cardValues[0].color}
            />
          </div>
          <div className="body-container">
            <Card
              title={cardValues[1].title}
              desc={cardValues[1].desc}
              img={cardValues[1].img}
              color={cardValues[1].color}
            />
            <Card
              title={cardValues[2].title}
              desc={cardValues[2].desc}
              img={cardValues[2].img}
              color={cardValues[2].color}
            />
          </div>
          <div className="body-container">
            <Card
              title={cardValues[3].title}
              desc={cardValues[3].desc}
              img={cardValues[3].img}
              color={cardValues[3].color}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
