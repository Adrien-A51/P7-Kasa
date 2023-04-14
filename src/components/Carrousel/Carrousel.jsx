import './Carrousel.scss'


//import React from "react";
import { useState } from "react";

//import logements from '../../assets/logements.json'

export const images = [
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
    
]

export default function Carrousel() {

    const [currImg/*, setCurrImg*/] = useState(0)

    return(
        <div className='carrousel-container'>
            <div className='carrousel' style={{backgroundImage: `url(${images[currImg]})`}}>
                <div className='f_gauche'></div>
                <div className='f_droite'></div>

            </div>
        </div>
    );
  
  
};



//<img className='img' src={images[currImg]} alt='img' />








/*
export default function Carrousel() {
    return(
        <div className='carrousel-container'>
            <img src={logements.pictures} alt="pict of log" />
                <div className='flex_f'>
                <img className='f_gauche' src={f_gauche} alt="f_gauche" />
                <img className='f_droite' src={f_droite} alt="f_droite" />
                </div>
        </div>
    );
  
  
};
*/
