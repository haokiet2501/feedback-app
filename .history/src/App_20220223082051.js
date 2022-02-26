function App() 
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