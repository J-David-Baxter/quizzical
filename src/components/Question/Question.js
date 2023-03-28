import React, { useEffect, useState } from 'react';
import shuffleAnswers from '../../utils/shuffle';
import Answer from '../Answer/Answer';
import './Question.css';

const Question = ({ question, correctAnswer, incorrectAnswers, setQuizScore }) => {
  let allAnswers = incorrectAnswers.concat(correctAnswer);
  shuffleAnswers(allAnswers);
  let answerArray = allAnswers.map((answer, i) => {
    return {
      text: answer,
      isSelected: false,
      isCorrect: answer === correctAnswer,
      red: false,
      green: false,
      gray: false
    }
  })

  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    setAnswers(answerArray)
  }, [question])

  return (
    <div className='Question'>
        <h4>{question}</h4>
        <div className='question--answer-container'>
          {answers.map((answer, i) => (
            <Answer key={i} text={answer.text}/>
          ))}
        </div>
        <hr className='question--linebreak'></hr>
    </div>
  )
}

export default Question