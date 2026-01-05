import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calculator from "./pages/Calculator";
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
			</Routes>
		</BrowserRouter>
	);
}

export default App;
