import React from 'react';
import './Answer.css';

const Answer = ({ text, isSelected, isCorrect, red, green, gray, toggleSelected }) => {
  const styles = {
    backgroundColor: isSelected ? '#D6DBF5' : '#F5F7FB',
  }
  
  return (
    <div className='Answer'>
        <p style={styles} className='answer--text' onClick={toggleSelected}>{text}</p>
    </div>
  )
}

export default Answer