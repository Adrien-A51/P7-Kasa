import React from 'react';
import './Rate.scss'
import Star_on from '../../assets/images/etoile_rouge.png';
import Star_off from '../../assets/images/etoile_grise.png';

export default function Rate_score({ rating }) {
	const Rating_number = [1, 2, 3, 4, 5];
	return (
		<div className="rate-score">
		{Rating_number.map((el) => rating >= el ? (
			<img key={el.toString()} src={Star_on} alt="Star_on"/>
			) : (
			<img key={el.toString()} src={Star_off} alt="Star_off"/>
			))}
		</div>
	);
};


/* Methode 2 - avec <div> et scss au lieu de <img>

	{totalRating.map((el) => rating >= el ? (
		<div key={el.toString()} className="star"></div>
		) : (
        <div key={el.toString()} className="star"></div>
	))}
*/