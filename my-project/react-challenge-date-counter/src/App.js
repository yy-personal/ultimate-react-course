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

  const [counter,setCounter]=useState(1) // counter to cumulative value from step

  return (
  <div className='counter-container'>
    <div className='counter-row'>
      <button>-</button><p>Step:</p><button>+</button>
    </div>
    <div className='counter-row'>
      <button>-</button><p>Counter:</p><button>+</button>
    </div>
      <h3>x days from now is (Day of week)( Month date year)</h3>

  </div>

  )
}



