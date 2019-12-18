import React from "react";
import "./style.css";

function DogCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          src={props.image}
          id={props.id}
          clicked={props.clicked}
          onClick={props.increaseScore}
        />
      </div>
    </div>
  );
}

export default DogCard;
