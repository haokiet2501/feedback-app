import React from 'react'

function FeedbackList({ feedback }) {
    if(!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
    }

    return (
      <div className='feedback-list'>
        {feedback.map((item) => (
            <div>
                
            </div>
        ))}
      </div>
    )
}

export default FeedbackList