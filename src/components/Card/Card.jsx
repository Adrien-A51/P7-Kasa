import React from "react";
import './Card.scss';
// logements
import logements from "../../assets/logements.json";
import { Link } from 'react-router-dom'


export default function Card() {

<div className="listlog">
  {logements.map((logement) => {
    return (
      <Link key={logement.id} to={`/logement/${logement.id}`}>
        <div className="log">
        <img src={logement.cover} alt={logement.title} />
        <p>{logement.title}</p>
        </div>
      </Link>
    );
})};
</div>
}
