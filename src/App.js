import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Message/>
      <Greet>
        <p>Rishabh</p>
        </Greet>
      <Greet name='Person 1' heroName="HERO 2">
        <div>Person 1 a.k.a HERO 2</div>
      </Greet>
      <Greet name='Person 2'/>
    </div>
  );
}

export default App;

