import React, { createRef } from 'react';
import classes from "./LearnMoreButton.module.scss"
import anime from 'animejs/lib/anime.es.js';

const LearnMoreButton = () => {
	const bgRef = createRef()
	const titleRef = createRef()

	const hoverOver = () => {
		anime.remove(bgRef.current)
		anime.timeline({
			duration: 500,

		}).add({
			targets: bgRef.current,
			width: "220px",
			borderRadius: "40px",
			easing: 'easeOutExpo',

		}).add({
			targets: titleRef.current,
			color: "#fff",
		}, 0)

	}
	const hoverOverOut = () => {
		anime.remove(bgRef.current)
		anime.timeline({
			duration: 500
		}).add({
			targets: bgRef.current,
			width: "40px",
			borderRadius: "50px",
			easing: "easeOutQuad",

		}, 0).add({
			targets: titleRef.current,
			color: "#000",
		}, 0)
	}
	return (
		<div className={classes.container} onMouseOver={hoverOver} onMouseOut={hoverOverOut}>
			<span ref={bgRef} className={classes.bg__container}></span>

			<span className={classes.icon__container}>></span>
			<span ref={titleRef} className={classes.title__container}>LEARN MORE</span>
		</div>
	);
};

export default LearnMoreButton;