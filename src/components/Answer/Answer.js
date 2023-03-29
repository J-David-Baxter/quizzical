import React from 'react';
import decodeHTML from '../../utils/decodeHTML';
import './Answer.css';

const Answer = ({ text, isSelected, isCorrect, red, green, gray, toggleSelected, quizIsSubmitted }) => {
  let styles = {}
  let decodedAnswer = decodeHTML(text)
  
  function setStyle(obj) {
    if (isSelected) {
      obj.backgroundColor = '#D6DBF5'
    } else if (red & quizIsSubmitted) {
      obj.backgroundColor = '#F8BCBC'
      obj.opacity = '0.5'
    } else if (green && quizIsSubmitted) {
      obj.backgroundColor = '#94D7A2'
    } else if (gray && quizIsSubmitted) {
      obj.opacity = '0.5'
    }
    return obj;
  }
  
  
  
  return (
    <div className='Answer'>
        <p style={setStyle(styles)} className='answer--text' onClick={toggleSelected}>{decodedAnswer}</p>
    </div>
  )
}

export default Answer