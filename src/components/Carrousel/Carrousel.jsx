import './Carrousel.scss'
import React from "react";
import { useState } from "react";

export default function Carrousel({ images }) {
    const [currImg, setCurrImg] = useState(0);

    if (images.length === 1)
    return (
        <div className='carrousel-container'>
            <div className='carrousel' style={{backgroundImage: `url(${images[currImg]})`}}>
                <div className='f_gauche_0'></div>
                <div className="nbre_img_0"></div>
                <div className='f_droite_0'></div>
            </div>
        </div>
    );
    
    return(
        <div className='carrousel-container'>
            <div className='carrousel' style={{backgroundImage: `url(${images[currImg]})`}}>
                <div className='f_gauche' onClick={() => 
                {setCurrImg(currImg === 0 ? images.length - 1 : currImg - 1) 
                && currImg > 0 && setCurrImg(currImg - 1);}}>
                </div>

                <div className="nbre_img"><p>{currImg + 1}/{images.length}</p></div>

                <div className='f_droite' onClick={() => 
                {setCurrImg(currImg === images.length - 1 ? 0 : currImg + 1)
                && currImg < images.length - 1 && setCurrImg(currImg + 1);}}>
                </div>
                
            </div>
        </div>
    );
      
};