import React from "react";
import "../css/Card.css";

const Card = props => (
    <div 
      className="flex-item card" 
      onClick={() => props.justClicked(props.id)} 
    >
      <img alt={props.name} src={props.image} />
    </div>
);

export default Card;
