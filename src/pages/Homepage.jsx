import { Link } from "react-router-dom";

export default function Homepage() {
	return (
		<div className="container">
			<h1>JS Training</h1>
			<Link to={"/calculator"}>
				<div>Calcolatrice</div>
			</Link>
		</div>
	);
}
