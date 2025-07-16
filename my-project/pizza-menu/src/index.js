import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
	{
		name: "Focaccia",
		ingredients: "Bread with italian olive oil and rosemary",
		price: 6,
		photoName: "pizzas/focaccia.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Margherita",
		ingredients: "Tomato and mozarella",
		price: 10,
		photoName: "pizzas/margherita.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Spinaci",
		ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
		price: 12,
		photoName: "pizzas/spinaci.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Funghi",
		ingredients: "Tomato, mozarella, mushrooms, and onion",
		price: 12,
		photoName: "pizzas/funghi.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Salamino",
		ingredients: "Tomato, mozarella, and pepperoni",
		price: 15,
		photoName: "pizzas/salamino.jpg",
		soldOut: true,
	},
	{
		name: "Pizza Prosciutto",
		ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
		price: 18,
		photoName: "pizzas/prosciutto.jpg",
		soldOut: false,
	},
];

function App() {
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

function Menu() {
	const pizzas = pizzaData;
	// const pizzas = [];
	const numberPizzas = pizzas.length;

	return (
		<main className="menu">
			<h2>Our Menu</h2>

			{numberPizzas > 0 ? (
				<React.Fragment>
					<p>Pizza mamamia</p>
					<ul className="pizzas">
						{pizzaData.map((pizza) => (
							<Pizza
								// this pizza here is actually an entire object, that is being passed into 'Pizza' function
								pizzaObj={pizza}
								key={pizza.name}
							/>
						))}
					</ul>
				</React.Fragment>
			) : (
				<p>We're still working on the menu</p>
			)}
			{/* <Pizza
				name="Pizza Spinaci"
				ingredients="Tomato, mozarella, spinach, and ricotta cheese"
				photoName="pizzas/focaccia.jpg"
				price={10}
			/>
			*/}
		</main>
	);
}

function Pizza({ pizzaObj }) {
	// if (pizzaObj.soldOut) {
	// 	return null;
	// }
	return (
		<li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
			{/* pass pizzaObj as prop to 'Pizza' */}
			<img src={pizzaObj.photoName} alt={pizzaObj.name} />
			<div>
				<h3>{pizzaObj.name}</h3>
				<p>{pizzaObj.ingredients}</p>
				{/* {pizzaObj.soldOut ? (
					<span>"SOLD OUT"</span>
				) : (
					<span>pizzaObj.price</span>
				)} */}
				<span>
					{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + 1}
				</span>
			</div>
		</li>
	);
}

function Header() {
	return (
		<header className="header">
			<h1>Fast React Pizza Co.</h1>
		</header>
	);
}

function Footer() {
	const timeNow = new Date().toLocaleTimeString();
	const hour = new Date().getHours();
	const openHour = 12;
	const closeHour = 22;
	const isOpen = hour >= openHour && hour <= closeHour;
	console.log(isOpen);
	// if (!isOpen) {
	// 	<p>
	// 		Outside from return: We're not open, come back between {openHour} to {closeHour}
	// 	</p>;
	// }
	return (
		<footer className="footer">
			<div className="order">
				<p>Time now is: {timeNow}</p>
				{isOpen ? (
					<Order openHour={openHour} closeHour={closeHour} />
				) : (
					<p>
						We're not open, come back between {openHour} to{" "}
						{closeHour}
					</p>
				)}
			</div>
		</footer>
	);
}

function Order({ closeHour, openHour }) {
	return (
		<>
			<p>
				We're open from {openHour} to {closeHour}
			</p>
			<button className="btn">Order</button>
		</>
	);
}

// React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
