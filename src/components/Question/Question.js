import React, { useEffect, useState } from 'react';
import shuffleAnswers from '../../utils/shuffle';
import Answer from '../Answer/Answer';
import './Question.css';

const Question = ({ question, correctAnswer, incorrectAnswers }) => {
  let answers = incorrectAnswers.concat(correctAnswer);
  shuffleAnswers(answers);
  let answerArray = answers.map((answer, i) => {
    return {
      text: answer,
      isSelected: false,
      isCorrect: answer === correctAnswer,
      red: false,
      green: false,
      gray: false
    }
  })

  const [allAnswers, setAllAnswers] = useState([]);

  useEffect(() => {
    setAllAnswers(answerArray)
  }, [question])

  return (
    <div className='Question'>
        <h4>{question}</h4>
        <div className='question--answer-container'>
          {allAnswers.map((answer, i) => (
            <Answer key={i} text={answer.text}/>
          ))}
        </div>
        <hr className='question--linebreak'></hr>
    </div>
  )
}

export default Question