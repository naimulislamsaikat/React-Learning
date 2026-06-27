import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'

function App() {
  return (
    <div className="App">
      <Greet name="Naimul" heroName="Human" >
      <p>This is children props </p>
      </Greet>
      <Greet name="Islam" heroName="Human" >
        <button>Button</button>
      </Greet>
      <Greet name="Saikat" heroName="Human" />
    </div>
  );
}

export default App;
