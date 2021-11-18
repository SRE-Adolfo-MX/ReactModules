import logo from './logo.svg';
import './App.css';


const Title = () => {
  return <h1>Hola koder</h1>
}

const Subtitle = () => {
  return <h1>a tu curso de React</h1>
}



function App() {
  const saludar = (nombre) => {
    return `Hola ${nombre}`
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Title />
          <Subtitle />
        </div>
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
        <p>
          Hola {5*100}
        </p>
        <p>
        {saludar("Adolfo")}
        </p>
      </header>
    </div>
  );
}

export default App;
