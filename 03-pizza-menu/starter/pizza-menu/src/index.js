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
    const pizzas = pizzaData
    // const pizzas = []
    const numPizzas = pizzas.length

    return (
        <main className="menu">
            <h2>Our menu</h2>
            {numPizzas > 0 ? (
                <ul className="pizzas">
                    {pizzaData.map(pizza => <Pizza
                        //Pass into Pizza function the pizzaObj
                        pizzaObj={pizza}
                        key={pizza.name}
                    />)}
                </ul>):<p>We are still working on our menu, please come back later</p>}

            {/* <Pizza
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
            /> */}
        </main>
    )

}

function Pizza(props) {
    console.log(props)
    // props, refer to the menu above : {name: 'Pizza Spnachi', ingredients: 'Tomato', photoName: 'pizzas\\focaccia.jpg', price: '10'}
    if(props.pizzaObj.soldOut){
        return null
    }
    return (
        <li className="pizza">
            <div>
                <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                <span>{props.pizzaObj.price + 1}</span>
            </div>
        </li>
    )
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 11
    const closeHour = 24
    const isOpen = (hour >= openHour && hour <= closeHour);

    console.log(hour);
    console.log(isOpen)

    // if(!isOpen){
    //     return <p>We're happy to welcome you between {openHour} and {closeHour}</p>
    // }

    return (
        <div>
            <footer className="footer">
                {isOpen ? (
                    <div className="order">
                        <p>
                            We're open until {closeHour}. Come visit us or order online
                        </p>
                        <button className="btn">
                            Order
                        </button>
                    </div>
                ):<p>We're happy to welcome you between {openHour} and {closeHour}</p>}
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

