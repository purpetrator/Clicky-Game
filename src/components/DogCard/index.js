import React from "react";
import "./style.css";

function DogCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.image} onClick={() => props.removeFriend(props.id)} />
      </div>
    </div>
  );
}

export default DogCard;
