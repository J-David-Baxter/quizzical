import Home from './pages/Home/Home';
import './App.css';
import { useState } from 'react';
import Quiz from './pages/Quiz/Quiz';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <div className="App">
      {!isPlaying ? 
        <Home /> :
        <Quiz />
      }
    </div>
  );
}

export default App;
