import React from 'react'

function FeedbackItem() {

  return (
    <div className='card'>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{text}</div>
    </div>
  )
}

export default FeedbackItem