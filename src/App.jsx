import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calculator from "./pages/Calculator";
import Homepage from "./pages/Homepage";
import TextConverter from "./pages/TextConverter";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/calculator" element={<Calculator />} />
				<Route path="/text-converter" element={<TextConverter />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
