import React from 'react';
import anime from 'animejs/lib/anime.es.js';
import classes from "./ConfirmButton.module.scss"
const ConfirmButton = (props) => {
	const containerRef = React.createRef()
	const titleContainerRef = React.createRef()

	const confirmHandler = () => {
		// if (props.confirmAction != undefined) {
		// 	props.confirmAction()
		// }
		anime.remove(titleContainerRef.current)
		anime.timeline({
			duration: 4000,
		}).add({
			targets: titleContainerRef.current,
			width: "80px",
			background: "#fff",
			scale: [1.1, 1],
			duration: 1000,
			easing: 'cubicBezier(.5, .05, .1, .3)',
			update: () => {
				titleContainerRef.current.innerHTML = `<svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1.5 17L10.5 24.5L30.5 1.5" stroke="#28DF99" stroke-width="2" stroke-linecap="round" />
			</svg>`
			}

		}).add({
			targets: titleContainerRef.current,
			width: "200px",
			color: "#28DF99",
			update: () => {
				titleContainerRef.current.innerHTML = titleContainerRef.current.innerHTML + "Successful"
			},
			duration: 5000,
		})

	}
	return (
		<div ref={containerRef} className={classes.container} onClick={confirmHandler}>
			<span ref={titleContainerRef} className={classes.button__container}>Confirm</span>

		</div>
	);
};

export default ConfirmButton;