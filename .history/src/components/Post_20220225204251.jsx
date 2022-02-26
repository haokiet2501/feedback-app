import React from 'react'
import { Navigate } from 'react-router-dom'

function Post() {
    const status = 200

    const onClick = () => {
        
    }

    if(status === 404) {
        return <Navigate to='/notfound' />
    }

    return (
        <>
            <h1>Post</h1>
            <button onClick={onClick}>Click</button>
        </>
    )
}

export default Post