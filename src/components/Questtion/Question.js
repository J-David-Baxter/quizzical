import React, { useState } from 'react';
import './Question.css';

const Question = ({ question, correctAnswer, incorrectAnswers }) => {
  function shuffleAnswers(array) {
    let arr = [array];
    for (let i = arr.length-1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr
  }

  const [answers, setAnswers] = useState(() => {
    let answerArray = incorrectAnswers.push(correctAnswer);
    let shuffledAnswers = shuffleAnswers(answerArray);
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

    </div>
  )
}

export default Question