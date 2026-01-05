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
			<div className="text-converter">
				<h1>Convertitore di Testo</h1>

				<input
					id="string-input"
					name="string-input"
					type="text"
					value={inputString}
					onChange={(e) => setInputString(e.target.value)}
				/>

				<div className="upper-case">
					<span>Maiuscolo: </span>
					<span>{upperCase(inputString)}</span>
				</div>

				<div className="lower-case">
					<span>Minuscolo: </span>
					<span>{lowerCase(inputString)}</span>
				</div>

				<div className="capitalize">
					<span>Iniziale maiuscola: </span>
					<span>{capitalize(inputString)}</span>
				</div>

				<div className="inverted-string">
					<span>Frase invertita: </span>
					<span>{reversed(inputString)}</span>
				</div>
			</div>
		</div>
	);
}
