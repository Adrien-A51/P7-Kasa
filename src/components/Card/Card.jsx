import React from "react";
import './Card.scss';
// logements
import logements from "../../assets/logements";
import { Link } from 'react-router-dom'


export default function Card() {
    return (
        <>

    <div className="listlog">
      {logements.map((logements) => {
        return (
          <Link key={logements.id} to={`/logement/${logements.id}`}>
            <div className="log">
              <img src={logements.cover} alt={logements.title} />
              <p>{logements.title}</p>
            </div>
          </Link>
        );
      })}
    </div>


        </>
    )
}