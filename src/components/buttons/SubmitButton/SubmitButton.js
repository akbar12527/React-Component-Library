import React, { createRef, useEffect } from 'react';
import classes from "./SubmitButton.module.scss"
import anime from 'animejs/lib/anime.es.js';

const SubmitButton = () => {
	const ParentRef = createRef()
	const ProgressRef = createRef()
	const ButtonTextRef = createRef()

	var uploadStatus = {
		percentage: "0",
	}

	const clickHandler = () => {
		anime.timeline({
			duration: 2000,

		}).add({
			targets: ProgressRef.current,
			left: "0%",
			easing: 'easeInOutExpo',
		}, 0).add({
			targets: uploadStatus,
			percentage: "100%",
			round: 1,
			easing: "linear",
			update: function () {
				ButtonTextRef.current.innerHTML = uploadStatus.percentage
			}
		}, 0).add({
			targets: ParentRef.current,
			color: "#fff"
		}, 1000).add({
			easing: "linear",
			update: function () {
				ButtonTextRef.current.innerHTML = "SUBMITTED!"
			}

		}, 2500).add({
			targets: ParentRef.current,
			scaleX: [1.2, 1],
			easing: 'spring(1, 80, 10, 0)'
		}, 0)
	}





	return (
		<div ref={ParentRef} onClick={clickHandler} className={classes.container} >
			<span ref={ProgressRef} className={classes.progress__container}></span>
			<span ref={ButtonTextRef}>SUBMIT</span>
		</div>
	);
};

export default SubmitButton;