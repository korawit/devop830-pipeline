import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="KU_logo.png" className="App-logo" alt="logo" />
        <p>
         I<span className="heart">♥️</span> Devops
        </p>
        <img src="cat.jpg" style={{width:300}} />
        <p className="small">
         This web app written by Mr.Korawit Orkphol
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
