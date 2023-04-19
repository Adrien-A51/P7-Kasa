import React from "react";
import './Apropos.scss';

import { Collapse } from 'antd';
const { Panel } = Collapse;

export default function Apropos() {
    return (
        <>
        <div className="head"></div>
        <div className="block">
            <div className="container">
            <Collapse>
            <Panel header="Fiabilité" key="1">
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. 
                    Les photos sont conformes aux logements, 
                    et toutes les informations sont régulièrement vérifiées par nos équipes</p>
            </Panel>
            <Panel header="Respect" key="2">
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. 
                    Tout comportement discriminatoire ou de perturbation du voisinage 
                    entraînera une exclusion de notre plateforme.</p>
            </Panel>
            <Panel header="Service" key="3">
                <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
                    N'hésitez pas à nous contacter si vous avez la moindre question.</p>
            </Panel>
            <Panel header="Sécurité" key="4">
                <p>La sécurité est la priorité de Kasa. 
                    Aussi bien pour nos hôtes que pour les voyageurs, 
                    chaque logement correspond aux critères de sécurité établis par nos services. 
                    En laissant une note aussi bien à l'hôte qu'au locataire, 
                    cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                    Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </Panel>
    </Collapse>
            </div>
        </div>
        </>
    )
    
}