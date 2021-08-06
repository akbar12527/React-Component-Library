import React from 'react';
import anime from 'animejs/lib/anime.es.js';
import classes from "./ThreeDotLoader.module.scss";
import cx from "classnames"
const ThreeDotLoader = () => {
	const loaderContainerRef = React.createRef()
	// const dotRef = React.createRef()
	var dotRef
	React.useEffect(() => {
		dotRef = document.querySelectorAll("." + classes.dot)
		anime({
			targets: dotRef,
			translateY: [0, -10, 0],
			delay: anime.stagger(200, { start: 200 }),
			easing: "easeInOutExpo",
			loop: true,
		})

	}, [classes.dot])
	const clickHandler = () => {

	}

	return (
		<div onClick={clickHandler} ref={loaderContainerRef} className={classes.container}>
			<span ref={dotRef} className={classes.dot}></span>
			<span ref={dotRef} className={classes.dot}></span>
			<span ref={dotRef} className={classes.dot}></span>
		</div>
	);
};

export default ThreeDotLoader;