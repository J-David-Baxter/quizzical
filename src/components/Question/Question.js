import React, { useState } from 'react';
import shuffle from '../../utils/shuffle';
import './Question.css';

const Question = ({ question, correctAnswer, incorrectAnswers }) => {
  

  const [answers, setAnswers] = useState(() => {
    let answerArray = incorrectAnswers.push(correctAnswer);
    let shuffledAnswers = shuffle(answerArray);
    return shuffledAnswers.map(answer => ({
        text: answer,
        isSelected: false,
        isCorrect: answer === correctAnswer,
        red: false,
        green: false,
        white: false
    }))
  })
  
  return (
    <div className='Question'>
        <h4>{question}</h4>
        <hr className='question--linebreak'></hr>
    </div>
  )
}

export default Question