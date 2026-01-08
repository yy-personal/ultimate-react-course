import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
// import './index.css';
// import App from './App.jsx'

import StarRating from "./StarRating.jsx";
function Test() {
  const [movieRating, setMovieRating]=useState(0)
  
	return (
		<div>
			<StarRating
				maxRating={10}
				color="blue"
				onSetMovieRating={setMovieRating}
			/>
			<p>This movie was rated {movieRating} stars</p>
		</div>
	);
}
createRoot(document.getElementById("root")).render(
	<StrictMode>
		{/* <App /> */}
		<StarRating
			maxRating={5}
			messages={["Terrible", "Bad", "Okay", "Good", "Excellent"]}
		/>
		<StarRating
			maxRating={10}
			color="red"
			size={24}
			className="test"
			defaultRating={3}
		/>
    <Test/>
	</StrictMode>
);
