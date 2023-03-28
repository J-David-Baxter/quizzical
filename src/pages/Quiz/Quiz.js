import React, { useEffect, useState } from 'react'
import Question from '../../components/Question/Question';
import './Quiz.css';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [quizIsSubmitted, setQuizIsSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  
  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5')
        .then(res => res.json())
        .then(data => setQuestions(data.results))
  }, [])

  return (
    <div className='Quiz'>
        {questions.map((question, i) => (
            <Question 
                key={i}
                question={question.question}
                correctAnswer={question['correct_answer']}
                incorrectAnswers={question['incorrect_answers']}
                setQuizScore={setQuizScore}
                quizIsSubmitted={quizIsSubmitted}
            />
        ))}
        {!quizIsSubmitted ?
            <button className='quiz--btn' onClick={() => setQuizIsSubmitted(true)}>Check answers</button> :
            <p>You scored {quizScore}/5 correct answers</p>
        }
    </div>
  )
}

export default Quiz