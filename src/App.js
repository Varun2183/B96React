
import './App.css';
import './ReactProg/FirstProg';
import Firstprog from './ReactProg/FirstProg';
import Greet from './ReactProg/Greet';
import SecondProg from './ReactProg/SecondProg';
import Welcome from './ReactProg/Welcome';
import Event from './ReactProg/Event';

function App() {
  return (
    <div className="App">
     <Firstprog/>
     <SecondProg/>
     <Greet   name="varun" designation="developer"/>
     <Greet   name="arun" designation="tester"/>
     <Welcome name="b96 " branch="AIML"/>
     <Event/>
    </div>
  );
}

export default App;
