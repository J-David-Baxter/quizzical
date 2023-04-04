import React from 'react';
import './Home.css';

const Home = ({ setIsPlaying }) => {
  return (
    <div className='home--left'>
        <h1 className='home--title'>Quizzical</h1>
        <p className='home--text'>Take a customized quiz!</p>
        <button className='home--btn' onClick={() => setIsPlaying(true)}>Start quiz</button>
    </div>
  )
}

export default Home