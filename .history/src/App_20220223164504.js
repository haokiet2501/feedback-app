import React, {useState} from 'react'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackItem"
import FeedbackData from "./data/FeedbackData"

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    return (
        <>
            <Header />
            <div className="contianer">
                <FeedbackItem />
            </div>
        </>
    )
}

export default App