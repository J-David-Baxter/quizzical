import React from 'react'

const Answer = ({ text, isSelected, isCorrect, red, green, gray }) => {
  return (
    <div className='Answer'>
        <div>{text}</div>
    </div>
  )
}

export default Answer