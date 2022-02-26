function App() {
    const comments = [
        {id: 1, text: "Comment 1"},
        {id: 2, text: "Comment 2"},
        {id: 2, text: "Comment 3"}
    ]

    const loading = false
    const showComments = false
    if (loading) return <h1>Loading...</h1>
    return (
        <div>
            {showComments && (
                <div className="comments">
                    <ul>
                      {comments.map((comment, index) => (
                          <li key={index}>{comment.text}</li>
                      ))}
                    </ul>
            </div>)}
        </div>
    )
}

export default App