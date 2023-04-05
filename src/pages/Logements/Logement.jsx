import './Logement.scss';
import { useParams } from "react-router-dom";
// Erreur 404
import Error from "../../components/Error/Error";
// logements
import logements from "../../assets/logements";
// etoile note
import Rate from "../../components/Rate/Rate"

import { Collapse } from 'antd';
//import Carrousel from '../../components/Carrousel/Carrousel';
const { Panel } = Collapse;

export default function Pagelog () {
  const { logementsId } = useParams();
  const log = logements.find((log) => logements.id === logementsId);
  console.log(log) ;
  if (log === undefined || log === null) {
    return <Error />
  }//if
 
return (
          <div className="container">
            <div key={log.id} to={`/logement/${log.id}`}></div>
          <div className='img'>
            <img src={log.pictures} alt="img" />
          </div>
          <div className='flex'>
            <div>
              <h1 className="title">{log.title}</h1>
              <h2 className="location">{log.location}</h2>
              <div className="tagContainer">
			        <span className="tagButton">{log.tags.first}</span>
              <span className="tagButton">{log.tags.second}</span>
		</div>
            </div>

            <div>
              <div className='flex_2'>
                <p className='hostname'>{log.host.name}</p>
                <img className='picture' src={log.host.picture} alt="pict of host" />
              </div>
              <Rate/>
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

/*
<div className='tags'>{log.tags}</div>


export default function Card() {
    return (
        <>

    <div>
      {logements.map((item) => {
        return (
            <div>
            <div key={item.id} to={`/logement/${item.id}`}></div>
              <h1 className="title">{item.title}</h1>
              <h2 className="location">{item.location}</h2>
              <p className="hostname">{item.host.name}</p>
              <div className="tags">{item.tags}</div>
              <h3 className="description">{item.description}</h3>
              <h3 className="equipements">{item.equipments}</h3>
            </div>
        );
      })}
    </div>


        </>
    )
}
*/