import { useState } from "react";

export default function TextConverter() {
	const [inputString, setInputString] = useState("");

	const upperCase = (string) => string.toUpperCase();

	const lowerCase = (string) => string.toLowerCase();

	const capitalize = (string) =>
		string
			.split(" ")
			.map(
				(word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase(),
			)
			.join(" ");

	const reversed = (string) => string.split("").toReversed();

	return (
		<div className="container">
			<h1>Convertitore di Testo</h1>

			<input
				id="string-input"
				name="string-input"
				type="text"
				value={inputString}
				onChange={(e) => setInputString(e.target.value)}
			/>

			<div className="upper-case">
				<h3>Maiuscolo</h3>
				<span>{upperCase(inputString)}</span>
			</div>

			<div className="lower-case">
				<h3>Minuscolo</h3>
				<span>{lowerCase(inputString)}</span>
			</div>

			<div className="capitalize">
				<h3>Iniziale maiuscola</h3>
				<span>{capitalize(inputString)}</span>
			</div>

			<div className="inverted-string">
				<h3>Frase invertita</h3>
				<span>{reversed(inputString)}</span>
			</div>
		</div>
	);
}
