import { Link } from "react-router-dom";

export default function GuessNumber() {
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
		</div>
	);
}
