import React from "react";
import './Card.scss';
import { Link } from 'react-router-dom';
import logements from "../../assets/logements.json";

export default function Card() {
  return(
    <div className="container-Card">
      {logements.map((logement) => {
        return (
          <Link key={logement.id} to={`/logement/${logement.id}`}>

            <div className="Card">
              <img src={logement.cover} alt={logement.title} />
                <p>{logement.title}</p>
                <div className="Card-text"></div>
            </div>

          </Link>
        )
    })}
    </div>
  )
};