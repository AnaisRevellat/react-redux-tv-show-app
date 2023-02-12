import s from "./style.module.css";
import {
	StarFill,
	StarHalf,
	Star as StarEmpty,
} from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {

/* test zone
const rating = 3.40; 
*/

// Déclarer un tableau d' étoiles
const starList = [];

// Stocker une variable avec le nbr d' étoiles pleines
const starFillCount = Math.floor(rating);

// Stocker dans une variable s'il y a une demie étoile ou non
const hasHalfStar = rating - starFillCount >= 0.5;

// Stocker dans une variable le nbr d' étoiles vides ou non
const emptyStarCount = 5 - starFillCount - (hasHalfStar ? 1 : 0)

// Pusher dans le tableau les étoiles pleines
for(let i = 1; i <= starFillCount; i++){
  starList.push(<StarFill key={"star-fill" + i} />)
}

// Pusher les demies étoiles 
if(hasHalfStar){
  starList.push(<StarHalf key={"star-half"} />)
}

// Pusher dans le ableau les étoiles vides
for(let i = 1; i <= emptyStarCount; i++){
  starList.push(<StarEmpty key={"star-empty" + i} />)
}


	return (
		<div>{starList}</div>
	);
}
