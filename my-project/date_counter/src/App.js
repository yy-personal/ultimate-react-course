import { useState } from "react";
import "./styles.css";

export default function App() {
	const [date, setDate] = useState(1);
	return (
		<div className="App">
			<Counter />
		</div>
	);
}

function Counter() {
	const [count, setCount] = useState(0);
	const [step, setStep] = useState(1);
	const date = new Date("june 21 2024");
	date.setDate(date.getDate() + count);
	return (
		<div>
			<>
				<button onClick={() => setStep((c) => c - 1)}>-</button>
				<span>Step: {step}</span>
				<button onClick={() => setStep((c) => c + 1)}>+</button>
			</>
			<br />
			<>
				<button onClick={() => setCount((c) => c - step)}>-</button>
				<span>Count: {count}</span>
				<button onClick={() => setCount((c) => c + step)}>+</button>
			</>
			<p>
				<span>
					{count === 0
						? "Today is "
						: count > 0
						? `${count} days from today is `
						: `${Math.abs(count)} days ago was `}
				</span>
				<span>{date.toDateString()}</span>
			</p>
		</div>
	);
}

function CurrentDate() {}
