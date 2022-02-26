function App() 
    const loading = false
    const showComments = true
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