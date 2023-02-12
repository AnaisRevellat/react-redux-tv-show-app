import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import s from "./styles.module.css";

export function TVShowListItem({ tvShow }) {
	return (  
  <div className={s.container}>

    <img src={`${SMALL_IMG_COVER_BASE_URL}${tvShow.backdrop_path}`}  alt={tvShow.name} className={s.img}/>

    <div className={s.title}>{tvShow.name}</div>
  </div>
  )
}
