import React from "react";
import "./Tag.css";

export default function Tag(props) {
  return (
    <div className="tag">
      <img src={`../images/${props.skill.image}`} className="tag--image" />
      {/* <div className="tag--summary">
        <h4>{props.skill.name}</h4>
      </div> */}
    </div>
  );
}
