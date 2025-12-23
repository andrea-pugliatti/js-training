import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calculator from "./pages/Calculator";
import Homepage from "./pages/Homepage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/calculator" element={<Calculator />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
