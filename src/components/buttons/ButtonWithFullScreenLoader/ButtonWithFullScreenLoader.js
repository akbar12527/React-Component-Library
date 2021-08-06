import React, { createRef } from 'react';
import classes from "./ButtonWithFullScreenLoader.module.scss"
import anime from 'animejs/lib/anime.es.js';


const ButtonWithFullScreenLoader = () => {


	const bgRef = createRef()
	const bgFullOpacityRef = createRef()
	const titleRef = createRef()
	const overlayContainerRef = createRef()
	const titleOverlayContainerRef = createRef()




	const loader = () => {
		anime.remove(bgFullOpacityRef.current)
		anime.remove(overlayContainerRef.current)
		anime.remove(bgFullOpacityRef.current)



		anime.timeline({
			duration: 4000
		}).add({
			targets: bgFullOpacityRef.current,
			opacity: 1,
			width: "150px",
			borderRadius: "40px",
			easing: 'easeOutExpo',
			duration: 1000
		}).add({
			targets: overlayContainerRef.current,
			left: "0%",
			easing: 'easeOutExpo',
			duration: 1000,
		}, 1000).add({
			targets: titleOverlayContainerRef.current,
			translateX: [200, 0],
			easing: 'easeOutExpo',
		}, 1000).add({
			targets: overlayContainerRef.current,
			left: "100%",
			easing: 'easeOutExpo',
			duration: 1000,
		}, 3000).add({
			targets: bgFullOpacityRef.current,
			opacity: 0,
			width: "40px",
			borderRadius: "40px",
			easing: 'easeOutExpo',
			duration: 500
		})
	}
	const hoverOver = () => {
		anime.remove(bgRef.current)
		anime.timeline({
			duration: 500,

		}).add({
			targets: bgRef.current,
			width: "150px",
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
		<div className={classes.container} onMouseOver={hoverOver} onMouseOut={hoverOverOut} onClick={loader}>
			<span ref={overlayContainerRef} className={classes.overlayContainer__container}>
				<span ref={titleOverlayContainerRef} className={classes.title__overlayContainer}>Loading...</span>
			</span>
			<span ref={bgRef} className={classes.bg__container}></span>

			<span ref={bgFullOpacityRef} className={classes.bg__container_fullOpacity}></span>
			<span ref={titleRef} className={classes.title__container}>
				<span>Next</span>
				<span>></span>

			</span>
		</div>
	);
};

export default ButtonWithFullScreenLoader;