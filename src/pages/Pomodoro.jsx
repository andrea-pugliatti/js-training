import { Link } from "react-router-dom";

export default function Pomodoro() {
	return (
		<div className="container">
			<div className="pomodoro">
				<div className="title">
					<h1>Pomodoro</h1>
					<Link to={"/"}>Go Home</Link>
				</div>
			</div>
		</div>
	);
}
