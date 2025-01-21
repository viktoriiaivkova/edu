import react from 'react';
import './App.css';
import './Joke.css';
import {Joke} from './Joke';
function App() {
  return (
    <div className="App">
       <div className="Heading">Joke Generator Using React and Joke API</div>
       <Joke/>
    </div>
  );
}

export default App;
