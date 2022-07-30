import logo from './logo.svg';
import './App.css';

function App() {
  const str = "Hello world!!!";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {str}
          {console.log("We can write JS code in jsx using {} braces and they must be one line JS code only")}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
