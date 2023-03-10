import React, { useState, useEffect } from "react";
import { TVShowAPI } from "./api/tv-show";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { BACKDROP_BASE_URL } from "./config";

//components
import { Logo } from "./components/Logo/Logo";

import logo from "./assets/images/tv_show_logo.png";
import "./global.css";
import s from "./style.module.css";
import { TVShowListItem } from "./components/TVShowListItem/TVShowListItem";

export function App() {
	const [currentTVShow, setCurrentTVShow] = useState();

	async function fetchPopulars() {
		const populars = await TVShowAPI.fetchPopulars();

		if (populars.length > 0) {
			setCurrentTVShow(populars[0]);
		}
	}
	useEffect(() => {
		fetchPopulars();
	}, []);

	console.log("***", currentTVShow);

	return (
		<div
			className={s.main_container}
			style={{
				background: currentTVShow
					? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
					: "black",
			}}
		>
			<div className={s.header}>
				<div className='row'>
					<div className='col-4'>
						<div>
							<Logo
								title='whatowatch'
								subtitle='Find your favourite show !'
								image={logo}
							/>
						</div>
					</div>
					<div className='col-md-12 col-lg-4'>
						<input style={{ width: "100%" }} type='text' />
					</div>
				</div>
			</div>

			<div className={s.tv_show_detail}>
				{currentTVShow ? (
					<TVShowDetail tvShow={currentTVShow} />
				) : (
					"no description available"
				)}
			</div>
			<div className={s.recommended_shows}>
				{currentTVShow ? <TVShowListItem tvShow={currentTVShow} /> : "tv show not available"}
			</div>
		</div>
	);
}
