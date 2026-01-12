import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";

function App() {
	return (
		<div>
			{/* The part of page that will always stays the same */}
			<h1>Hello TOP of Page at APP</h1>

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="product" element={<Product />} />
					<Route path="pricing" element={<Pricing />} />
					<Route path="app" element={<AppLayout />} />
					<Route path="/login" element={<Login />} />

					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
export default App;
