import React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <div className="card" key={props.id}>
      <div>
        <img className="front" src={props.src} alt="front-card" />
        <img className="back" src="./img/cover.png" alt="back-card" />
      </div>
    </div>
  );
}
