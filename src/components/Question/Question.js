import React, { useEffect, useState } from 'react';
import shuffleAnswers from '../../utils/shuffle';
import decodeHTML from '../../utils/decodeHTML';
import Answer from '../Answer/Answer';
import './Question.css';

const Question = ({ question, correctAnswer, incorrectAnswers, setQuizScore, quizIsSubmitted }) => {
  let allAnswers = incorrectAnswers.concat(correctAnswer);
    shuffleAnswers(allAnswers);
    let initialState = allAnswers.map((answer, i) => {
    return {
      text: answer,
      isSelected: false,
      isCorrect: answer === correctAnswer,
      red: false,
      green: false,
      gray: false
    }
  })

  let decodedText = decodeHTML(question)
  
  const [answers, setAnswers] = useState([]);

  function toggleSelected(index) {
    setAnswers(prev => prev.map((answer, i) => {
      return i === index ? {...answer, isSelected: !answer.isSelected} : {...answer, isSelected: false}
    }))
  }

  useEffect(() => {
    setAnswers(initialState)
  }, [question])

  useEffect(() => {
     setAnswers(prev => prev.map(answer => {
      if (answer.isSelected && !answer.isCorrect) {
        return {...answer, isSelected: false, red: true}
      } else if (answer.isSelected && answer.isCorrect) {
        setQuizScore(prev => prev + 1)
        return {...answer, isSelected: false, green: true}
      } else if (!answer.isSelected && answer.isCorrect) {
        return {...answer, isSelected: false, green: true}
      } else {
        return {...answer, isSelected: false, gray: true}
      }
     }))
  }, [quizIsSubmitted, setQuizScore])

  return (
    <div className='Question'>
        <h4>{decodedText}</h4>
        <div className='question--answer-container'>
          {answers.map((answer, i) => (
            <Answer key={i} {...answer} toggleSelected={() => toggleSelected(i)} quizIsSubmitted={quizIsSubmitted}/>
          ))}
        </div>
        <hr className='question--linebreak'></hr>
    </div>
  )
}

export default Question