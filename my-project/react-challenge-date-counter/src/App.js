import { useState } from 'react';
import './App.css';

export default function App() {
  return (
    <div className='App'>
      <Counter />
    </div>
  )
}

function Counter() {
  const [step, setStep] = useState(1) // step will be added into counter
  const [counter, setCounter] = useState(1) // counter to cumulative value from step, used as days too


  function increaseStep() {
    setStep((s) => s + 1);
  }
  function decreaseStep() {
    if (step > 1) {
      setStep((currentStep) => currentStep - 1);
    }
  }
  function increaseCounter() {
    setCounter((c) => c + step);
  }
  function decreaseCounter() {
    setCounter((c) => c - step);
  }

  const date = new Date()
  date.setDate(date.getDate() + counter)

  return (
    <div className='counter-container'>
      <div className='counter-row'>
        <button onClick={decreaseStep}>-</button>
        <p>Step:{step}</p>
        <button onClick={increaseStep}>+</button>
      </div>
      <div className='counter-row'>
        <button onClick={decreaseCounter}>-</button><p>Counter:{counter}</p><button onClick={increaseCounter}>+</button>
      </div>

      <h3>
        <span>{counter === 0 
        ? "Today is" 
        : counter > 0 
        ? `${counter} days from now is` 
        : `${Math.abs(counter)} days ago was`}</span>
        <span> {date.toDateString()}</span>
      </h3>

    </div>

  )
}



