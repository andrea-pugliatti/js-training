import { useEffect } from "react";

export default function OddEven() {
	function isEven(number) {
		return number % 2 === 0;
	}

	function oddEvenFromArray(array) {
		const result = { even: [], odd: [] };
		array.forEach((current) => {
			isEven(current) ? result.even.push(current) : result.odd.push(current);
		});
		return result;
	}

	useEffect(() => {
		const arr = [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		];
		console.log(oddEvenFromArray(arr));
	}, []);

	return (
		<div className="container">
			<h1>Pari e dispari</h1>
			<p>
				Scrivi una funzione che prenda in ingresso un array di 20 numeri e crei
				due nuovi array: uno con i numeri pari, uno con i dispari. Mostra
				entrambi gli array e le loro somme.
			</p>
		</div>
	);
}
