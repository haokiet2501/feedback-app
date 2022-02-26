import React, {useState} from 'react'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    const deleteHandle = (id) => {
        console.log('App', id);
    }
    return (
        <>
            <Header />
            <div className="contianer">
                <FeedbackList feedback={feedback} 
                handleDelete={deleteHandle}
                />
            </div>
        </>
    )
}

export default App