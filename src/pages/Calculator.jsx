import { useState } from "react";

/**
 * Crea una pagina che permetta di inserire due numeri all’utente e, tramite dei pulsanti
 * dedicati, calcolare e mostrare nella pagina: la somma, la differenza, la
 * moltiplicazione e la divisione. Ogni operazione deve essere eseguita solo quando
 * l’utente clicca sul relativo pulsante ed entrambi i numeri sono stati inseriti.
 */

export default function Calculator() {
	const [firstNumber, setFirstNumber] = useState(0);
	const [operation, setOperation] = useState("");
	const [displayedNumber, setDisplayedNumber] = useState("0");

	const sum = (first, second) => Number(first) + Number(second);
	const difference = (first, second) => Number(first) - Number(second);
	const multiplication = (first, second) => Number(first) * Number(second);
	const division = (first, second) => Number(first) / Number(second);

	function handleSubmit() {
		let result;
		switch (operation) {
			case "sum":
				result = sum(firstNumber, displayedNumber);
				break;
			case "difference":
				result = difference(firstNumber, displayedNumber);
				break;
			case "multiplication":
				result = multiplication(firstNumber, displayedNumber);
				break;
			case "division":
				result = division(firstNumber, displayedNumber).toFixed(4);
				break;
			case "percent":
				break;
			default:
				break;
		}
		setDisplayedNumber(result);
	}

	return (
		<div className="container">
			<div>{Number(displayedNumber)}</div>
			<form action={handleSubmit}>
				<div>
					<button
						id="back-button"
						name="back-button"
						type="button"
						onClick={() => {
							if (displayedNumber.length <= 1) {
								setDisplayedNumber("0");
							} else {
								setDisplayedNumber(
									displayedNumber.substring(0, displayedNumber.length - 1),
								);
							}
						}}
					>
						{"<-"}
					</button>

					<button
						id="cancel-button"
						name="cancel-button"
						type="button"
						onClick={() => {
							setDisplayedNumber("0");
							setFirstNumber(0);
						}}
					>
						C
					</button>

					<button
						id="percent-button"
						name="percent-button"
						type="button"
						onClick={() => {
							// setFirstNumber(Number(displayedNumber));
							// setDisplayedNumber("0");
							// setOperation("sum");
						}}
					>
						%
					</button>

					<button
						id="division-button"
						name="division-button"
						type="button"
						onClick={() => {
							setFirstNumber(Number(displayedNumber));
							setDisplayedNumber("0");
							setOperation("division");
						}}
					>
						/
					</button>
				</div>

				<div>
					<button
						id="seven-button"
						name="seven-button"
						type="button"
						onClick={() => {
							setDisplayedNumber(displayedNumber + 7);
						}}
					>
						{"7"}
					</button>

					<button
						id="eight-button"
						name="eight-button"
						type="button"
						onClick={() => {
							setDisplayedNumber(displayedNumber + 8);
						}}
					>
						{"8"}
					</button>

					<button
						id="nine-button"
						name="nine-button"
						type="button"
						onClick={() => {
							setDisplayedNumber(displayedNumber + 9);
						}}
					>
						{"9"}
					</button>

					<button
						id="multiplication-button"
						name="multiplication-button"
						type="button"
						onClick={() => {
							setFirstNumber(Number(displayedNumber));
							setDisplayedNumber("0");
							setOperation("multiplication");
						}}
					>
						*
					</button>
				</div>

				<div>
					<button
						id="four-button"
						name="four-button"
						type="button"
						onClick={() => {
							setDisplayedNumber(displayedNumber + 4);
						}}
					>
						{"4"}
					</button>
					<button
						id="five-button"
						name="five-button"
						type="button"
						onClick={() => {
							setDisplayedNumber(displayedNumber + 5);
						}}
					>
						{"5"}
					</button>
					<button
						id="six-button"
						name="six-button"
						type="button"
						onClick={() => {
							setDisplayedNumber(displayedNumber + 6);
						}}
					>
						{"6"}
					</button>

					<button
						id="difference-button"
						name="difference-button"
						type="button"
						onClick={() => {
							setFirstNumber(Number(displayedNumber));
							setDisplayedNumber("0");
							setOperation("difference");
						}}
					>
						-
					</button>
				</div>

				<div>
					<button
						id="one-button"
						name="one-button"
						type="button"
						onClick={() => {
							setDisplayedNumber(displayedNumber + 1);
						}}
					>
						{"1"}
					</button>

					<button
						id="two-button"
						name="two-button"
						type="button"
						onClick={() => {
							setDisplayedNumber(displayedNumber + 2);
						}}
					>
						{"2"}
					</button>

					<button
						id="three-button"
						name="three-button"
						type="button"
						onClick={() => {
							setDisplayedNumber(displayedNumber + 3);
						}}
					>
						{"3"}
					</button>

					<button
						id="sum-button"
						name="sum-button"
						type="button"
						onClick={() => {
							setFirstNumber(Number(displayedNumber));
							setDisplayedNumber("0");
							setOperation("sum");
						}}
					>
						+
					</button>
				</div>

				<div>
					<button
						id="sign-button"
						name="sign-button"
						type="button"
						onClick={() => {
							setDisplayedNumber(displayedNumber * -1);
						}}
					>
						{"+/-"}
					</button>

					<button
						id="zero-button"
						name="zero-button"
						type="button"
						onClick={() => {
							setDisplayedNumber(displayedNumber + 0);
						}}
					>
						{"0"}
					</button>

					<button
						id="comma-button"
						name="comma-button"
						type="button"
						onClick={() => {
							// setDisplayedNumber(displayedNumber + ",00");
						}}
					>
						{","}
					</button>

					<button type="submit">=</button>
				</div>
			</form>
		</div>
	);
}

/* export default function Calculator() {
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
*/
