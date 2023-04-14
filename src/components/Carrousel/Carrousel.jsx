import './Carrousel.scss'
import React from "react";
import { useState } from "react";
//import fleche_g from '../../assets/images/fleche-g.svg';
//import fleche_d from '../../assets/images/fleche-d.svg'



export default function Carrousel({ images }) {


    const [currImg, setCurrImg] = useState(0);

    if ( images.length === 1)
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
        

        <div className='f_gauche'
        onClick={() => {

            setCurrImg(currImg === 0 ? images.length - 1 : currImg - 1) 
        && currImg > 0 && setCurrImg(currImg - 1);}}></div>

        <div className="nbre_img"><p>{currImg + 1}/{images.length}</p></div>

        <div className='f_droite'  
        onClick={() => {setCurrImg(currImg === images.length - 1 ? 0 : currImg + 1)
        && currImg < images.length - 1 && setCurrImg(currImg + 1);}}></div>
    </div>
</div>
    );
      
};


//<img className='img' src={images[currImg]} alt='img' />


/*
<div className='carrousel-container'>
<div className='carrousel' style={{backgroundImage: `url(${images[currImg]})`}}>
    <div className='f_gauche'
     onClick={() => {currImg > 0 && setCurrImg(currImg - 1);}}></div>

    <div className='f_droite'  
    onClick={() => {currImg < images.length - 1 && setCurrImg(currImg + 1);}}></div>

</div>
</div>


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









/*

    function Slide_suivant() {
        setCurrImg(
          currImg >= (Img.length-1) ? 0 : (currImg + 1)// la dernière image
          
        );
      }
    
      function Slide_precedent() {
        setCurrImg(
          currImg === 0 ? (Img.length-1) : (currImg - 1)
        );
      }

    return(
<>
    <div className='carrousel-container'>
        <img src={Img[currImg]} alt='slide(s) du log' className='carrousel'/>
            <img src={fleche_g} alt='fleche_gauche' 
            className={Img.length <= 1 ? "fleche_gauche_0" : "fleche_gauche"}
            onClick={Slide_precedent}/>

            <img src={fleche_d} alt='fleche_droite' 
            className={Img.length <= 1 ? "fleche_droite_0" : "fleche_droite"}
            onClick={Slide_suivant}/>

            <div className={Img.length <= 1 ? "compteur_0" : "compteur"}>
                {currImg+1}/{Img.length}
            </div>
    </div>

</>
    );
*/