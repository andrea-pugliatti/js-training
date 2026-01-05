import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Citations() {
	const quotes = [
		{
			text: "La vita trova sempre un modo",
			author: "Ian Malcolm, Jurassic Park",
		},
		{
			text: "Non tutto quello che è oro luccica, non tutti quelli che vagano sono perduti",
			author: "J.R.R. Tolkien",
		},
		{ text: "Fai o non fare. Non c'è provare", author: "Yoda, Star Wars" },
		{
			text: "Sii il cambiamento che vuoi vedere nel mondo",
			author: "Mahatma Gandhi",
		},
		{
			text: "L'unico modo per fare un ottimo lavoro è amare quello che fate",
			author: "Steve Jobs",
		},
		{
			text: "La felicità può essere trovata anche nei momenti più bui, se solo uno si ricorda di accendere la luce",
			author: "Albus Silente",
		},
		{
			text: "Non si vede bene che col cuore. L'essenziale è invisibile agli occhi",
			author: "Antoine de Saint-Exupéry",
		},
		{ text: "Stay hungry, stay foolish", author: "Steve Jobs" },
		{
			text: "Vivi come se dovessi morire domani. Impara come se dovessi vivere per sempre",
			author: "Mahatma Gandhi",
		},
		{
			text: "Ciò che non ci uccide ci rende più forti",
			author: "Friedrich Nietzsche",
		},
		{
			text: "Il successo non è definitivo, il fallimento non è fatale: ciò che conta è il coraggio di andare avanti",
			author: "Winston Churchill",
		},
		{
			text: "La mente è come un paracadute. Funziona solo se si apre",
			author: "Albert Einstein",
		},
		{
			text: "Scegli un lavoro che ami, e non dovrai lavorare neppure un giorno in vita tua",
			author: "Confucio",
		},
		{
			text: "Non ho fallito. Ho solo trovato 10.000 modi che non funzionano",
			author: "Thomas Edison",
		},
		{
			text: "La fantasia è più importante della conoscenza",
			author: "Albert Einstein",
		},
		{
			text: "Il futuro appartiene a coloro che credono nella bellezza dei propri sogni",
			author: "Eleanor Roosevelt",
		},
		{
			text: "Sapere è bene, ma sapere chi sa è meglio",
			author: "Proverbio popolare",
		},
		{
			text: "Il viaggio di mille miglia inizia con un solo passo",
			author: "Lao Tzu",
		},
		{ text: "Carpe Diem, cogli l'attimo", author: "Orazio" },
		{
			text: "Ognuno è un genio. Ma se giudichi un pesce dalla sua abilità di arrampicarsi sugli alberi, passerà tutta la vita a credersi stupido",
			author: "Albert Einstein",
		},
	];

	const [randomNumber, setRandomNumber] = useState(0);

	function getRandomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	useEffect(() => setRandomNumber(getRandomNumber(0, 19)), []);

	return (
		<div className="container">
			<div className="citations">
				<div className="title">
					<h1>Citazioni</h1>
					<Link to={"/"}>Go Home</Link>
				</div>

				<button
					type="button"
					onClick={() => setRandomNumber(getRandomNumber(0, 19))}
				>
					Nuova citazione
				</button>

				<div className="citation">
					<span>{quotes[randomNumber].text} </span>
					<span>{quotes[randomNumber].author}</span>
				</div>
			</div>
		</div>
	);
}
