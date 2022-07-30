import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const str1 = "Hello world!!!";
  const str2 = "Hello Rahul"
  let isLoggedIn = true;
  if(isLoggedIn){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {str2}
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
  // We can return only a single <> </> in the return of a component in React.
  // If we have multiple opening and closing tags then wrap all in 1 div or use <> </>
  // Using <> </> makes sure that in the browser all the opening and closing tags are separate not wrapped in one div
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {str1}
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
      <span>

      </span>
    </>
  );
}

export default App;
