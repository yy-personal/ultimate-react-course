import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	return (
		<>
			<TipCalculator />
		</>
	);
}

function TipCalculator() {
	const [bill, setBill] = useState(0);
	const [tipPercentOne, setTipPercentOne] = useState(0);
	const [tipPercentTwo, setTipPercentTwo] = useState(0);
	const tipAmount = bill * ((tipPercentOne + tipPercentTwo) / 2 / 100);

  function resetAll(){
    setBill(0);
    setTipPercentOne(0);
    setTipPercentTwo(0);
  }
	return (
		<>
			<div>
				<Bill bill={bill} onSetBill={setBill} />
				<TipPercentage
					tipPercent={tipPercentOne}
					onSetPercent={setTipPercentOne}
				>
					How did you like the service?
				</TipPercentage>
				<TipPercentage
					tipPercent={tipPercentTwo}
					onSetPercent={setTipPercentTwo}
				>
					How did your friend like the service?
				</TipPercentage>
				{bill>0 &&(<TotalBill bill={bill} tipAmount={tipAmount} onResetAll={resetAll}/>)}
			</div>
		</>
	);
}

function Bill({ bill, onSetBill }) {
	return (
		<span>
			<label>
				How much was the bill?
				<input
					type="number"
					value={bill}
					onChange={(event) => {
						onSetBill(Number(event.target.value));
						console.log(bill);
					}}
				/>
			</label>
		</span>
	);
}

function TipPercentage({ children, tipPercent, onSetPercent }) {
	return (
		<div>
			<label>
				{children}
				<select
					value={tipPercent}
					onChange={(event) => {
						onSetPercent(Number(event.target.value));
						console.log(tipPercent);
					}}
				>
					<option value={0}>Dissatisfied(0%)</option>
					<option value={5}>It was okay(5%)</option>
					<option value={10}>It was good(10%)</option>
					<option value={20}>Excellent(20%)</option>
				</select>
			</label>
		</div>
	);
}

function TotalBill({ bill, tipAmount, onResetAll }) {
	return (
		<div>
			<h2>
				Your bill is ${bill}, paying ${bill + tipAmount} (${bill} + $
				{tipAmount})
			</h2>
			<button onClick={onResetAll}>Reset</button>
		</div>
	);
}

export default App;
