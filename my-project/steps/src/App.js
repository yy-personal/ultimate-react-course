import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen &&
        <>
          (<Step messages={messages} />
          <StepMessage step={1}>
            <p>Pass in content </p>
            <p>First</p>
          </StepMessage>
          <StepMessage step={2}>
            <p>Read child prop </p>
            <p>Second</p>
          </StepMessage>)
        </>
      }
    </>
  );
}


function Step({ messages }) {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) {
      setStep((currentStep) => currentStep - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>

      <StepMessage step={step}>
        {messages[step - 1]}
        <div className="buttons">
          <Button bgColor='#e7e7e7' textColor='#333' onClick={() => alert(`Learn how to ${messages[step - 1]}`)}>Learn how
          </Button>
        </div>

      </StepMessage>

      <div className="buttons">
        <Button bgColor='#7950f2' textColor='#fff' onClick={handlePrevious}>
          <span>👈</span>Previous
        </Button>
        <Button bgColor='#7950f2' textColor='#fff' onClick={handleNext}>
          <span>👉</span>Next
        </Button>
      </div>
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <p className="message">
      Step {step}: {children}
    </p>
  );
}

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}