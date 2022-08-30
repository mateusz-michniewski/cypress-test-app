import './App.css';
import PrimeCalculator from './components/calculator';
import CalculatorContainer from './containers/calculatorContainer';

function App() {
  return (
    <div className="App" >
      <PrimeCalculator />
      <CalculatorContainer />
    </div>
  );
}

export default App;
