import './App.css';
import Hello from './components/function-component/Hello'
import Toggle from './components/function-component/Toggle'

function App() {
  return (
    <div>
      <Hello name={'nikolay'}/>
      <Toggle />
    </div>
  );
}

export default App;
