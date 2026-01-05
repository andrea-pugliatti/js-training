import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calculator from "./pages/Calculator";
import Citations from "./pages/Citations";
import GuessNumber from "./pages/GuessNumber";
import Homepage from "./pages/Homepage";
import OddEven from "./pages/OddEven";
import TextConverter from "./pages/TextConverter";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/calculator" element={<Calculator />} />
				<Route path="/text-converter" element={<TextConverter />} />
				<Route path="/odd-even" element={<OddEven />} />
				<Route path="/guess-number" element={<GuessNumber />} />
				<Route path="/citations" element={<Citations />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
