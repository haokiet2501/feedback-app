function App() {
    const comments = [
        {id: 1, text: "Comment 1"},
        {id: 2, text: "Comment 2"},
        {id: 2, text: "Comment 3"}
    ]
    return (
        <div>
            <div className="comments">
                {comments.map((comment))}
            </div>
        </div>
    )
}

export default App