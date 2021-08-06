import React from 'react';
import classes from "./ButtonsLayout.module.scss";
import Buttons from "../../components/buttons/index"
import Loaders from "../../components/loaders/index"
const ButtonsLayout = () => {
	console.log(Buttons)

	return (
		<div className={classes.container}>

			{Buttons.map(btn => {
				return btn()
			})}
			{Loaders.map(loader => {
				return loader()
			})}


		</div>
	);
};

export default ButtonsLayout;