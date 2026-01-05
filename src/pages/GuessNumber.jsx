/** biome-ignore-all lint/suspicious/noArrayIndexKey: <Ignore linter> */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function GuessNumber() {
	const [randomNumber, setRandomNumber] = useState(0);
	const [attempts, setAttempts] = useState([]);
	const [lastAttempt, setLastAttempt] = useState("");
	const [gameOver, setGameOver] = useState(false);

	function getRandomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function initializeGame() {
		setGameOver(false);
		setRandomNumber(getRandomNumber(1, 100));
		setAttempts([]);
		setLastAttempt("");
	}

	useEffect(initializeGame, []);

	function handleSubmit(e) {
		e.preventDefault();
		if (lastAttempt !== "") setAttempts([...attempts, Number(lastAttempt)]);
		if (Number(lastAttempt) === randomNumber) setGameOver(true);
		setLastAttempt("");
	}

	function getResponse(input) {
		console.log(randomNumber);
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
					disabled={gameOver}
					value={lastAttempt}
					onChange={(e) => setLastAttempt(e.target.value)}
				/>

				<button type="submit" disabled={gameOver}>
					Prova
				</button>

				{gameOver ? (
					<button type="button" onClick={initializeGame}>
						Reset
					</button>
				) : (
					""
				)}
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
