import { useState } from "react";
import { Link } from "react-router-dom";

export default function Pomodoro() {
	const [timer, setTimer] = useState();
	const [seconds, setSeconds] = useState(1500);

	function handleStart() {
		if (timer) clearInterval(timer);

		const interval = setInterval(() => {
			setSeconds((prev) => prev - 1);
		}, 1000);
		setTimer(interval);
	}

	function handlePause() {
		if (timer) {
			clearInterval(timer);
			setTimer(undefined);
		}
	}

	function handleReset() {
		if (timer) clearInterval(timer);

		setTimer(undefined);
		setSeconds(1500);
	}

	function secondsToString(seconds) {
		const minutes = Math.floor(seconds / 60);
		let minutesString = minutes.toString();
		let secondsString = (seconds % 60).toString();

		if (minutesString.length < 2) minutesString = `0${minutesString}`;
		if (secondsString.length < 2) secondsString = `0${secondsString}`;

		return `${minutesString}:${secondsString}`;
	}

	return (
		<div className="container">
			<div className="pomodoro">
				<div className="title">
					<h1>Pomodoro Timer</h1>
					<Link to={"/"}>Go Home</Link>
				</div>

				<div className="timer">{secondsToString(seconds)}</div>

				<button type="button" onClick={() => handleStart()}>
					Start
				</button>
				<button type="button" onClick={() => handlePause()}>
					Pausa
				</button>
				<button type="button" onClick={() => handleReset()}>
					Reset
				</button>
			</div>
		</div>
	);
}
