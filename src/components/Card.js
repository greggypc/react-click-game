import React from "react";
import "../css/Card.css";

const Card = props => (
    <div 
      className="flexItem card" 
      onClick={() => props.justClicked(props.id)} 
    >
      <img class={props.class} alt={props.name} src={props.image} />
    </div>
);

export default Card;
