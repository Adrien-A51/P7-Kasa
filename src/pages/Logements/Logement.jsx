import './Logement.scss';
import { useParams } from "react-router-dom";

// logements
import logements from "../../assets/logements.json";
// Erreur 404
import Error from "../../components/Error/Error";
// Carrousel
import Carrousel from '../../components/Carrousel/Carrousel';
// Tag
import Tag from '../../components/Tag/Tag';
// etoile note
import Rate from "../../components/Rate/Rate";


import { Collapse } from 'antd';
const { Panel } = Collapse;

export default function Pagelog () {
  const { id } = useParams();
  const log = logements.find((logement) => logement.id === id);
  if (log === undefined || log === null) {
    return <Error />
  }//if
  else{
 
  return (
            <div className="container">
              <div key={log.id} to={`/logement/${log.id}`}></div>
              <Carrousel images={log.pictures}/>
            <div className='flex'>
              <div>
                <h1 className="title">{log.title}</h1>
                <h2 className="location">{log.location}</h2>

                <div className="tagContainer">
                  {log.tags.map((tag) => (
                    <Tag key={tag} tag={tag} />
                  ))}
                </div>

              </div>

              <div>
                <div className='flex_2'>
                  <p className='hostname'>{log.host.name}</p>
                  <img className='picture' src={log.host.picture} alt="pict of host" />
                </div>
                <Rate rating={log.rating} />
              </div>

            </div>

            <Collapse className='container_collapse'>
              <Panel className='container_panel' header="Description" key="1">
                <p className="description">{log.description}</p>
              </Panel>
              <Panel className='container_panel' header="Équipements" key="2">
                <p className="equipements">{log.equipments}</p>
              </Panel>
            </Collapse>
            </div>
  )

  }//Pagelog
}