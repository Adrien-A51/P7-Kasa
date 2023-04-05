import './Rate.scss'

import Rate_on from '../../assets/images/Rate_on.svg';
import Rate_off from '../../assets/images/Rate_off.svg';

export default function Rate_stars({ score }) {
	const stars = [1, 2, 3, 4, 5];
	return (
		<div className="rate-score">
			{stars.map((level) => score >= level ? (
				<img key={level.toString()} className="star" src={Rate_on} alt="star"/>
				) : (
                <img key={level.toString()} className="star" src={Rate_off} alt="star"/>
				))}
		</div>
	);
}