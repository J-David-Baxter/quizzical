import Home from './pages/Home/Home';
import './App.css';
import { useCallback, useEffect, useState } from 'react';
import Quiz from './pages/Quiz/Quiz';
import Form from './components/Form/Form';
import './pages/Home/Home.css'
import { categories } from './constants/categories';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [formData, setFormData] = useState({
    number: 5,
    category: 0,
    difficulty: '',
    type: ''
  });
  const [url, setUrl] = useState('');

  const makeUrl = useCallback(() => {
    let string = '';
    if (formData.number) {
      string += `amount=${formData.number}`
    }
    if (formData.category) {
      string += `&category=${formData.category}`
    }
    if (formData.difficulty) {
      string += `&difficulty=${formData.difficulty}`
    }
    if (formData.type) {
      string += `&type=${formData.type}`
    }
    return string;
  }, [formData])

  useEffect(() => {
    setUrl('https://opentdb.com/api.php?' + makeUrl());
  }, [formData, makeUrl])

  function handleChange(e) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value
      }
    })
  }

  return (
    <div className="App">
      {!isPlaying ? 
        <div className='Home'>
          <Home setIsPlaying={setIsPlaying}/>
          <Form formData={formData} setFormData={setFormData} handleChange={handleChange}/>
        </div> :
        <Quiz setIsPlaying={setIsPlaying} url={url}/>
      }
    </div>
  );
}

export default App;
