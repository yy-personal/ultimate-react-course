import { useState } from "react";

const messages = ["Learn React", "Apply for jobs", "Invest income"];

export default function App() {
	// const array = useState(1)
	// console.log(array);
	const [step, setStep] = useState(1); // only use this to set state
	const [isOpen, setIsOpen] = useState(true);

	function handlePrevious() {
		if (step > 1) {
			setStep(step - 1);
		}
	}
	function handleNext() {
		if (step < 3) {
			setStep(step + 1);
		}
	}
	function handleToggle() {
		setIsOpen(!isOpen);
		setStep(1);
	}

	

	return (
		<>
			{/* <button className="close" onClick={() => setIsOpen(!isOpen)}>
				<b>x</b>
			</button> */}
			<button className="close" onClick={handleToggle}>
				<b>x</b>
			</button>
			{isOpen && (
				<div className="steps">
					<div className="numbers">
						<div className={`${step >= 1 ? "active" : ""}`}>1</div>
						<div className={`${step >= 2 ? "active" : ""}`}>2</div>
						<div className={`${step >= 3 ? "active" : ""}`}>3</div>
					</div>

					<p className="message">
						Step {step}:{messages[step - 1]}
					</p>

					<div className="buttons">
						<button
							style={{
								backgroundColor: "#7950f2",
								color: "white",
							}}
							onClick={handlePrevious}
						>
							Previous
						</button>
						<button
							style={{
								backgroundColor: "purple",
								color: "white",
							}}
							onClick={handleNext}
						>
							Next
						</button>
					</div>
				</div>
			)}
		</>
	);
}
