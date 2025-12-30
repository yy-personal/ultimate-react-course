import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

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
            <Header></Header>
            <h1>Hello !</h1>
            <Menu></Menu>
            <Footer />

        </div>
    )

}

function Header() {
    // const style = { color: 'red', fontSize: '48px', textTransform: "uppercase" }
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    )
}

function Menu() {
    return (
        <main className="menu">
            <h2>Our menu</h2>
            <Pizza
                name="Pizza Spnachi"
                ingredients="Tomato"
                photoName="pizzas\focaccia.jpg"
                price={10}
            />
            <Pizza
                name="Pizza 2"
                ingredients="2"
                photoName="pizzas\focaccia.jpg"
                price={20}
                // use js mode to pass in integers, arrays, objects
            />
        </main>
    )

}

function Pizza(props) {
    console.log(props)
    // props, refer to the menu above : {name: 'Pizza Spnachi', ingredients: 'Tomato', photoName: 'pizzas\\focaccia.jpg', price: '10'}

    return (
        <div className="pizza">
            <div>
                <img src={props.photoName} alt={props.name} />
                <h3>{props.name}</h3>
                <p>{props.ingredients}</p>
                <span>{props.price + 3}</span>
            </div>
        </div>
    )
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12
    const closeHour = 22
    const isOpen = (hour >= openHour && hour <= closeHour);
    console.log(hour);

    return (
        <div>
            <footer className="footer">
                {new Date().toLocaleDateString()}. We're Open
            </footer>
        </div>
    )
}



//React 18
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

