import { Link } from "react-router-dom";

export default function Homepage() {
	return (
		<div className="container">
			<div className="homepage">
				<h1>JS Training</h1>
				<Link to={"/calculator"}>Calcolatrice</Link>
				<Link to={"/text-converter"}>Convertitore di Testo</Link>
				<Link to={"/odd-even"}>Pari e dispari</Link>
				<Link to={"/guess-number"}>Indovina il Numero</Link>
				<Link to={"/pomodoro"}>Pomodoro</Link>
				<Link to={"/citations"}>Citazioni</Link>
			</div>
		</div>
	);
}
