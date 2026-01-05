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

	function resetCount(){
		setCount(0)
	}
	return (
		<div>
			<>
				Steps: <input type="range" min="0" max="10" value={step} onChange={(event)=>
					setStep(Number(event.target.value))
				}/>
			</>
			<br />
			<>				
				<span>Step: {step}</span>
			</>
			<br />
			<>
				
				<button onClick={() => setCount((c) => c - step)}>-</button>
				<input type="number" value={count} onChange={(event)=>
				setCount(Number(event.target.value))
				}/>
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
			{count !== 0 && <button onClick={resetCount}>Reset</button>}
		</div>
	);
}

function CurrentDate() {}
