import './App.css';
import {useState} from 'react'
import Hello from './components/function-component/Hello'
import Toggle from './components/function-component/Toggle'

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  // `disabled` property is starting out as `false`
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  return (
    <div>
      <button 
        style={{backgroundColor: (disabled ? 'gray' : buttonColor), color: 'white'}}
        onClick={() => setButtonColor(newButtonColor)}
        //should start out as false since it's set above in useState(false)
        disabled={disabled}
        >Change to {newButtonColor}           
      </button>
      <input 
        type="checkbox" 
        id="disable-button-checkbox"
        // default checked value is coming from `disabled` property
        defaultChecked={disabled}
        // simply for accessiblity
        aria-checked={disabled}
        // take the event and setDisabled() to the `checked` attributed of the event target aka <input>
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
      <Hello name={'nikolay'}/>
      <Toggle />
    </div>
  );
}

export default App;
