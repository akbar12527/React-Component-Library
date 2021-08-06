import React from 'react';
import anime from 'animejs/lib/anime.es.js';
import classes from "./FluidLoader.module.scss";
import cx from "classnames"
const FluidLoader = () => {
	// const dotFluidRef = React.createRef()
	React.useEffect(() => {
		var dotFluidRef = document.querySelectorAll("." + classes.dotFluid)
		anime.remove(dotFluidRef)
		anime({
			targets: dotFluidRef,
			translateY: [-25, 0, 25, 0],
			scaleY: [1, 1.3, 1, 1.3, 1],
			easing: 'easeOutSine',
			delay: anime.stagger(300),
			duration: 3000,
			loop: true,

		})
	})
	return (
		<div className={classes.container}>
			<span className={classes.dot}>
				<span className={classes.dotFluid}></span>
			</span>
			<span className={classes.dot}>
				<span className={classes.dotFluid}></span>
			</span>
			<span className={classes.dot}>
				<span className={classes.dotFluid}></span>
			</span>


		</div>
	);
};

export default FluidLoader;