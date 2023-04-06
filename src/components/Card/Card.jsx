import React from "react";
import './Card.scss';
// logements
import logements from "../../assets/logements.json";
import { Link } from 'react-router-dom'
//import { useParams, Navigate } from 'react-router-dom'


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

  /*
  const { id } = useParams();
    useEffect( () => {

      const log = logements.find((element)  => element.id === id);
      console.log(log)
      console.log(id);

      if(log === undefined){
        //return(<Navigate to="/" />);
        console.log("non trouvé")
      }else {
        console.log(id);
        
        /*
        return (
          <div>{log.title}</div>
        )

     console.log("trouvé");
      }
        })

      */