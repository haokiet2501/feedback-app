import React, {useState} from 'react'

function FeedbackItem() {
  const [rating, setRating] = useState(7)  
  const [text, setText] = useState('This is a a ex')

  return (
    <div className='card'>
        <div className="num-display"></div>
        <div className="text-display"></div>
    </div>
  )
}

export default FeedbackItem