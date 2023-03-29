import React from 'react';
import './Answer.css';

const Answer = ({ text, isSelected, isCorrect, red, green, gray, toggleSelected }) => {
  let styles = {}
  
  function setStyle(obj) {
    if (isSelected) {
      obj.backgroundColor = '#D6DBF5'
    } else if (red) {
      obj.backgroundColor = '#F8BCBC'
      obj.opacity = '0.5'
    } else if (green) {
      obj.backgroundColor = '#94D7A2'
    } else if (gray) {
      obj.opacity = '0.5'
    }
    return obj;
  }
  
  
  
  return (
    <div className='Answer'>
        <p style={setStyle(styles)} className='answer--text' onClick={toggleSelected}>{text}</p>
    </div>
  )
}

export default Answer