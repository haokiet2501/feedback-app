import React, {useState} from 'react'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    return (
        <>
            <Header />
            <div className="contianer">
                <FeedbackList feedback={feedback} 
                
                />
            </div>
        </>
    )
}

export default App