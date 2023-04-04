import React, { useEffect, useState } from 'react'
import Question from '../../components/Question/Question';
import { ColorRing } from 'react-loader-spinner';
import './Quiz.css';

const Quiz = ({ setIsPlaying, url }) => {
  const [questions, setQuestions] = useState([]);
  const [quizIsSubmitted, setQuizIsSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  function resetQuiz() {
    setQuizScore(0);
    setQuizIsSubmitted(false);
    getQuiz();
  }
  
  function getQuiz() {
    fetch(url)
        .then(res => res.json())
        .then(data => setQuestions(data.results))
  }

  function handleHomeClick() {
    setIsPlaying(false)
  }

  useEffect(() => {
    getQuiz();
  }, [])

  return (
    <div className='Quiz'>
        <p className='quiz--home-link' onClick={handleHomeClick}>Home</p>
        <h1 className='quiz--title'>Quizzical</h1>
        {questions.length === 0 && 
        <ColorRing 
          visible={true}
          height={80}
          width={80}
          wrapperStyle={{margin: '0 auto'}}
          ariaLabel='blocks-loading'
          colors={['#293264', '#293264', '#293264', '#293264', '#293264']}
        />
        }
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
              <p className='quiz--score'>You scored {quizScore}/{questions.length} correct answers</p>
              <button className='quiz--btn' onClick={resetQuiz}>Play again</button>
            </div>
        }
    </div>
  )
}

export default Quiz