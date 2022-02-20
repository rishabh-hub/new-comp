import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
function App() {
  return (
    <div className="App">
      <Greet name ='Rishabh'/>
      <Greet name='Person 1' heroName="HERO 2"/>
      <Greet name='Person 2'/>
    </div>
  );
}

export default App;

