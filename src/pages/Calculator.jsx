import { useState } from "react";

/**
 * Crea una pagina che permetta di inserire due numeri all’utente e, tramite dei pulsanti
 * dedicati, calcolare e mostrare nella pagina: la somma, la differenza, la
 * moltiplicazione e la divisione. Ogni operazione deve essere eseguita solo quando
 * l’utente clicca sul relativo pulsante ed entrambi i numeri sono stati inseriti.
 */

export default function Calculator() {
	const [firstNumber, setFirstNumber] = useState(0);
	const [secondNumber, setSecondNumber] = useState(0);
	const [operation, setOperation] = useState("sum");
	const [displayedNumber, setDisplayedNumber] = useState(0);

	const sum = (first, second) => Number(first) + Number(second);
	const difference = (first, second) => Number(first) - Number(second);
	const multiplication = (first, second) => Number(first) * Number(second);
	const division = (first, second) => Number(first) / Number(second);

	function handleSubmit() {
		let result;
		switch (operation) {
			case "sum":
				result = sum(firstNumber, secondNumber);
				break;
			case "difference":
				result = difference(firstNumber, secondNumber);
				break;
			case "multiplication":
				result = multiplication(firstNumber, secondNumber);
				break;
			case "division":
				result = division(firstNumber, secondNumber).toFixed(4);
				break;
			default:
				break;
		}
		setDisplayedNumber(result);
	}

	return (
		<div className="container">
			<form action={handleSubmit}>
				<input
					id="first-number-input"
					name="first-number-input"
					type="number"
					value={firstNumber}
					onChange={(e) => setFirstNumber(e.target.value)}
				/>

				<input
					id="second-number-input"
					name="second-number-input"
					type="number"
					value={secondNumber}
					onChange={(e) => setSecondNumber(e.target.value)}
				/>

				<button
					id="sum-button"
					name="sum-button"
					type="button"
					onClick={() => setOperation("sum")}
				>
					+
				</button>
				<button
					id="difference-button"
					name="difference-button"
					type="button"
					onClick={() => setOperation("difference")}
				>
					-
				</button>
				<button
					id="multiplication-button"
					name="multiplication-button"
					type="button"
					onClick={() => setOperation("multiplication")}
				>
					*
				</button>
				<button
					id="division-button"
					name="division-button"
					type="button"
					onClick={() => setOperation("division")}
				>
					/
				</button>

				<button type="submit">=</button>
			</form>
			<span className="display">{displayedNumber}</span>
		</div>
	);
}
