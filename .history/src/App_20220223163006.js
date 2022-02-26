import Header from "./components/Header"
import FeedbackItem from "./components/FeedbackItem"
import FeedbackData from "./data/FeedbackData"

function App() {
    const [feedback, setFeedback] = use
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