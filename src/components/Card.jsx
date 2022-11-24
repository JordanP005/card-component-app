import React from "react";

function Card(props) {
  return (
    <div className="card-box">
      <div
        className="color-block"
        style={{ backgroundColor: props.color }}
      ></div>
      <div className="card-box-container">
        <div className="card-container-text">
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
        </div>
        <div className="card-container-img">
          <img src={props.img} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Card;
