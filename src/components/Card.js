import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import "./Card.css";

export default function Card(props) {
  let n = props.skill.skill;

  return (
    <div className="card">
      <img src={`../images/${props.skill.image}`} className="card--image" />
      <div className="card--summary">
        <p className="card-title">{props.skill.name}</p>
      </div>
    </div>
  );
}
