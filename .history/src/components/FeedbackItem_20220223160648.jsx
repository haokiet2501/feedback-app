import React, {useState} from 'react'

function FeedbackItem() {
  const [rating, setRating] = useState(7)  
  const [text, setText] = useState('This is a a example of a feedback item.')
  const 
  return (
    <div className='card'>
        <div className="num-display">{rating}</div>
        <div className="text-display">{text}</div>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default FeedbackItem