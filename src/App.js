import logo from './logo.svg';
import './App.css';
import PulsaBotones from './components/PulsaBotones';
import Contador from './components/Contador';
import AutoFocus from './components/AutoFocus';
import MensajePrevio from './components/MensajePrevio';
import Timer from './components/Timer'

function App() {
  return (
    <div className="App">
      {/*<PulsaBotones />*/} 
      {/*<Contador />*/}  
      <Timer /> 
      {/* <AutoFocus /> */}
      {/* <MensajePrevio />*/}
    </div>
  );
}

export default App;
