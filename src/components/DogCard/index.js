import React from "react";
import "./style.css";

function DogCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        {/* I need an onClick function here to increase the score and shuffle the
        cards */}
        <img src={props.image} onClick={props.increaseScore} />
      </div>
    </div>
  );
}

export default DogCard;
