/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function GuessNumber() {
	const [randomNumber, setRandomNumber] = useState(0);
	const [attempts, setAttempts] = useState([]);
	const [lastAttempt, setLastAttempt] = useState("");

	function getRandomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function initializeGame() {
		setRandomNumber(getRandomNumber(1, 100));
	}

	useEffect(initializeGame, []);

	function handleSubmit(e) {
		e.preventDefault();
		if (lastAttempt !== "") setAttempts([...attempts, Number(lastAttempt)]);
		setLastAttempt("");
	}

	function getResponse(input) {
		if (input < 1 || input > 100) {
			return "Inserisci un numero tra 1 e 100!";
		} else if (input > randomNumber) {
			return "Il numero è troppo alto!";
		} else if (input < randomNumber) {
			return "Il numero è troppo basso!";
		} else if (input === randomNumber) {
			return `Corretto! Hai vinto! Ci hai messo ${attempts.length} tentativi`;
		}
	}

	return (
		<div className="container">
			<div className="guess-number">
				<div className="title">
					<h1>Indovina il Numero</h1>
					<Link to={"/"}>Go Home</Link>
					<p>
						Realizza un gioco "Indovina il numero": il computer sceglie un
						numero tra 1 e 100. L'utente fa tentativi e riceve feedback "troppo
						alto", "troppo basso" o "corretto!". Conta i tentativi necessari.
					</p>
				</div>
			</div>

			<form onSubmit={handleSubmit} className="attempt-input">
				<input
					name="attempt-input"
					type="number"
					value={lastAttempt}
					onChange={(e) => setLastAttempt(e.target.value)}
				/>
				<button type="submit">Prova!</button>
			</form>

			<div className="attempts">
				{attempts.map((current, index) => (
					<div key={index}>
						{current} {getResponse(current)}
					</div>
				))}
			</div>
		</div>
	);
}
