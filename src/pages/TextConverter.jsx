import { useState } from "react";

export default function TextConverter() {
	const [inputString, setInputString] = useState("");

	return (
		<div className="container">
			<h1>Convertitore di Testo</h1>

			<input
				id="first-number-input"
				name="first-number-input"
				type="text"
				value={inputString}
				onChange={(e) => setInputString(e.target.value)}
			/>

			<div className="upper-case">
				<h3>Maiuscolo</h3>
				<span>{inputString}</span>
			</div>

			<div className="lower-case">
				<h3>Minuscolo</h3>
				<span>{inputString}</span>
			</div>

			<div className="capitalize">
				<h3>Iniziale maiuscola</h3>
				<span>{inputString}</span>
			</div>

			<div className="inverted-string">
				<h3>Frase invertita</h3>
				<span>{inputString}</span>
			</div>
		</div>
	);
}
