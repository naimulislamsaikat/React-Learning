import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';

function App() {
  const data = getData();

  return (
  <div className="App">
    <Greet />
  </div>
  );
}

export default App;
