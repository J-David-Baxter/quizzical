import Home from './pages/Home/Home';
import './App.css';
import { useCallback, useEffect, useState } from 'react';
import Quiz from './pages/Quiz/Quiz';
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
          <form className='home--right'>
            <div>
              <label>Questions </label>
              <input 
                type='number'
                name='number'
                value={formData.number}
                onChange={handleChange}
                min={5}
                max={20}
                placeholder='5'
              />
            </div>
            <div>
              <label>Category </label>
              <select value={formData.category} name='category' onChange={handleChange}>
                <option value={0}>Any</option>
                {categories.map((category, i) => (
                  <option key={i} value={i+9}>{category}</option>
                ))}
              </select>
            </div>
            <div>
              <label>Difficulty </label>
              <select value={formData.difficulty} name='difficulty' onChange={handleChange}>
                <option value=''>Any</option>
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
              </select>
            </div>
            <div>
              <label>Type </label>
              <select value={formData.type} name='type' onChange={handleChange}>
                <option value=''>Any</option>
                <option value='multiple'>Multiple Choice</option>
                <option value='boolean'>True / False</option>
              </select>
            </div>
          </form>
          
        </div> :
        <Quiz setIsPlaying={setIsPlaying} url={url}/>
      }
    </div>
  );
}

export default App;
