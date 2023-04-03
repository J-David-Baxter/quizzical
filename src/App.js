import Home from './pages/Home/Home';
import './App.css';
import { useState } from 'react';
import Quiz from './pages/Quiz/Quiz';

function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  
  return (
    <div className="App">
      {!isPlaying ? 
        <Home setIsPlaying={setIsPlaying}/> :
        <Quiz setIsPlaying={setIsPlaying}/>
      }
    </div>
  );
}

export default App;
