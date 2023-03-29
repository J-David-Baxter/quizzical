import React, { useEffect, useState } from 'react'
import Question from '../../components/Question/Question';
import './Quiz.css';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [quizIsSubmitted, setQuizIsSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  function resetQuiz() {
    setQuizScore(0);
    setQuizIsSubmitted(false);
  }
  
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
            <div className='quiz--result-container'>
              <button className='quiz--btn' onClick={() => setQuizIsSubmitted(true)}>Check answers</button> 
            </div> :
            <div className='quiz--result-container'>
              <p className='quiz--score'>You scored {quizScore}/5 correct answers</p>
              <button className='quiz--btn' onClick={resetQuiz}>Play again</button>
            </div>
        }
    </div>
  )
}

export default Quiz