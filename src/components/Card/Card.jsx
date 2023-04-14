import React from "react";
import './Card.scss';
// logements
import { Link } from 'react-router-dom';
import logements from "../../assets/logements.json";


export default function Card() {
  return(
    <div className="listlog">
      {logements.map((logement) => {
        return (
          <Link key={logement.id} to={`/logement/${logement.id}`}>
            <div className="log">
            <img src={logement.cover} alt={logement.title} />
            <p>{logement.title}</p>
            </div>
          </Link>
        )
    })}
    </div>
  )// return parent


};// Card
