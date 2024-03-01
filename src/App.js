import logo from './logo.svg';
import './App.css';

import Home from './Home';
import Home1 from './Home1';
import Fun1 from './Fun1';
import Fun2 from './Fun2';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
        </a>
        <Home/>
        <Home1/>
        <Fun1/>
        <Fun2/>
      </header>
    </div>
  );
}

export default App;
