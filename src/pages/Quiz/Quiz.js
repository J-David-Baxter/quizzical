import React, { useEffect, useState } from 'react'
import Question from '../../components/Questtion/Question';
import './Quiz.css';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [quizIsSubmitted, setQuizIsSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  
  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
        .then(res => res.json())
        .then(data => setQuestions(data.results))
  }, [])

  console.log(questions)

  return (
    <div className='Quiz'>
        {questions.map((question, i) => (
            <Question 
                key={i}
                question={question.question}
                correctAnswer={question['correct_answer']}
                incorrectAnswers={question['incorrect_answers']}
            />
        ))}
    </div>
  )
}

export default Quiz