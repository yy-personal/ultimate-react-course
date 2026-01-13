import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";


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
					<Route path="/login" element={<Login />} />
					<Route path="app" element={<AppLayout />}>
						<Route index element={<p>List of cities</p>}></Route>
						<Route path="cities" element={<CityList />}></Route>
						<Route
							path="countries"
							element={<p>Countries</p>}
						></Route>
						<Route path="form" element={<p>Form</p>}></Route>
					</Route>

					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
export default App;
