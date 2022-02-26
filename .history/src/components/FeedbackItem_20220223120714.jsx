import React, {useState} from 'react'

function FeedbackItem() {
  const [rating, setRating] = useState('')  
  const [rating, setRating] = useState('')
    
  return (
    <div className='card'>
        <div className="num-display"></div>
        <div className="text-display"></div>
    </div>
  )
}

export default FeedbackItem