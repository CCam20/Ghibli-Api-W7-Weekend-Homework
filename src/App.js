import logo from './logo.svg';
import './App.css';
import MovieContainer from './containers/MovieContainer';

function App() {
  const footer = require('./images/footer.png')
  return (
<>
    <header> <img src={logo} className="App-logo" alt="logo" /></header>
    <div className="App">
      <MovieContainer/>
    </div>
    <footer><img className='footer' src={footer} /></footer>
</>
  );
}

export default App;
