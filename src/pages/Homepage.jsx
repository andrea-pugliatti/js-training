import { Link } from "react-router-dom";

export default function Homepage() {
	return (
		<div className="container">
			<h1>JS Training</h1>
			<Link to={"/calculator"}>
				<div>Calcolatrice</div>
			</Link>
			<Link to={"/text-converter"}>
				<div>Convertitore di Testo</div>
			</Link>
			<Link to={"/odd-even"}>
				<div>Pari e dispari</div>
			</Link>
		</div>
	);
}
