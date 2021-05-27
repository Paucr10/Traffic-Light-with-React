import React, { useState, useEffect } from "react";
import { Button } from "bootstrap";
import { unmountComponentAtNode } from "react-dom/cjs/react-dom.production.min";

export function Home() {
	const [luz1, setLuz1] = useState("apagado");
	const [luz2, setLuz2] = useState("apagado");
	const [luz3, setLuz3] = useState("apagado");

	const handleClick = e => {
		let seleccion = e.target.id;

		if (seleccion === "red") {
			if (luz1 === "red") {
				setLuz1("apagado");
			} else {
				setLuz1("red");
				setLuz2("apagado");
				setLuz3("apagado");
			}
		}
		if (seleccion === "yellow") {
			if (luz2 === "yellow") {
				setLuz2("apagado");
			} else {
				setLuz2("yellow");
				setLuz1("apagado");
				setLuz3("apagado");
			}
		}

		if (seleccion === "green") {
			if (luz3 === "green") {
				setLuz3("apagado");
			} else {
				setLuz3("green");
				setLuz1("apagado");
				setLuz2("apagado");
			}
		}
	};

	return (
		<div className="container">
			{}
			<div className="center">
				<div
					id="red"
					className={luz1}
					onClick={event => handleClick(event)}></div>
				<div
					id="yellow"
					className={luz2}
					onClick={event => handleClick(event)}></div>
				<div
					id="green"
					className={luz3}
					onClick={event => handleClick(event)}></div>
			</div>
		</div>
	);
}
