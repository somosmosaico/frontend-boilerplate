import { useState } from 'react';
import './App.css';

export const areEqual = (a, b) => a === b;

function App() {
  const [valueA, setValueA] = useState('');
  const [valueB, setValueB] = useState('');
  const [equal, setIsEqual] = useState(false);

  const updateEqual = () => {
    setIsEqual(areEqual(valueA, valueB));
  };

  return (
    <div className="App">
        <h1>Identidade de String</h1>
        <input data-testid="input-a" value={valueA} onChange={(e) => setValueA(e.target.value)} className="AppInput" type="text" placeholder="String 1" />
        <input data-testid="input-b" value={valueB} onChange={(e) => setValueB(e.target.value)} className="AppInput" type="text" placeholder="String 2" />
        <p data-testid="output-result">
          {equal ? <span className="AppResultSuccess">Igual</span> : <span className="AppResultFailure">Diferente</span>}
        </p>
        <button data-testid="input-submit" onClick={updateEqual} className="App-link">Validar</button>
    </div>
  );
}

export default App;
