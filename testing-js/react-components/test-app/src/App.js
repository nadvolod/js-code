import './App.css';
import {useState} from 'react'
import Hello from './components/function-component/Hello'
import Toggle from './components/function-component/Toggle'

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  return (
    <div>
      <button 
        style={{backgroundColor: buttonColor}}
        onClick={() => setButtonColor(newButtonColor)}>
          Change to {newButtonColor} 
      </button>
      <Hello name={'nikolay'}/>
      <Toggle />
    </div>
  );
}

export default App;
