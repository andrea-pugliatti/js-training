/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import { useEffect, useState } from "react";

export default function OddEven() {
	const [numbers, setNumbers] = useState(Array(20).fill(0));
	const [evenNumbers, setEvenNumbers] = useState([]);
	const [oddNumbers, setOddNumbers] = useState([]);
	const [evenSum, setEvenSum] = useState(0);
	const [oddSum, setOddSum] = useState(0);

	function isEven(number) {
		return number % 2 === 0;
	}

	function oddEvenFromArray(array) {
		const result = { even: [], odd: [] };
		array.forEach((current) => {
			isEven(current)
				? result.even.push(Number(current))
				: result.odd.push(Number(current));
		});
		return result;
	}

	useEffect(() => {
		const result = oddEvenFromArray(numbers);
		console.log(result);
		setEvenNumbers([...result.even]);
		setOddNumbers([...result.odd]);
		setEvenSum(result.even.reduce((acc, curr) => acc + curr, 0));
		setOddSum(result.odd.reduce((acc, curr) => acc + curr, 0));
	}, [numbers]);

	return (
		<div className="container">
			<div className="odd-even">
				<div className="title">
					<h1>Pari e dispari</h1>
					<p>
						Scrivi una funzione che prenda in ingresso un array di 20 numeri e
						crei due nuovi array: uno con i numeri pari, uno con i dispari.
						Mostra entrambi gli array e le loro somme.
					</p>
				</div>
			</div>
			<div className="numbers-input">
				{numbers.map((current, index) => (
					<div key={index}>
						<input
							type="number"
							value={numbers[index]}
							onChange={(e) => {
								const newNumbers = [...numbers];
								newNumbers[index] = e.target.value;
								setNumbers(newNumbers);
							}}
						/>
					</div>
				))}
			</div>
			<div className="even-numbers">
				<h3>Pari</h3>
				<div>Numeri: </div>
				{evenNumbers.map((current, index) => (
					<span key={index}>{current} </span>
				))}
				<div>
					Somma: <span>{evenSum}</span>
				</div>
			</div>
			<div className="odd-numbers">
				<h3>Dispari</h3>
				<div>Numeri: </div>
				{oddNumbers.map((current, index) => (
					<span key={index}>{current} </span>
				))}
				<div>
					Somma: <span>{oddSum}</span>
				</div>
			</div>
		</div>
	);
}
