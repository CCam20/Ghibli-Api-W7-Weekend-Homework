import logo from './logo.svg';
import './App.css';
import MovieContainer from './containers/MovieContainer';

function App() {
  return (
<>
    <header> <img src={logo} className="App-logo" alt="logo" /></header>
    <div className="App">
      <MovieContainer/>
    </div>
</>
  );
}

export default App;
