import logo from './logo.svg';
import './App.css';
import CountdownTimer from './components/CountdownTimer';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React.js <code>Countdown Timer</code> and Hooks.
        </p>
      </div>
        <CountdownTimer />
    </div>
  );
}

export default App;
