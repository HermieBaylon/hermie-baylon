import React from 'react';
import { BsFillStarFill } from "react-icons/bs";
import './Card.css';

export default function Card(props) {
    let n = props.skill.skill;

    return (
        <div className='card'>
            <img src={`../images/${props.skill.image}`} className="card--image" />
            <div className='card--summary'>
                <h4>{props.skill.name}</h4>
                {/* {[...Array(n)].map((e, i) => <span className="busterCards" key={i}>
                    <BsFillStarFill></BsFillStarFill>
                </span>)}
                <p>Experience (years): {props.skill.experience}</p> */}
            </div>
        </div>
    )
}