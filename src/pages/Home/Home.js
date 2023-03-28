import React from 'react';
import './Home.css';

const Home = ({ isPlaying }) => {
  return (
    <div className='Home'>
        <h1 className='home--title'>Quizzical</h1>
        <p className='home--text'>Take a multiple choice quiz!</p>
        <button className='home--btn'>Start quiz</button>
    </div>
  )
}

export default Home