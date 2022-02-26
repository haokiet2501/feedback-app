import React from 'react'
import { Navigate } from 'react-router-dom'

function Post() {
    const status = 200

    if(status === 404) {
        return <Navigate to='/notfound' />
    }

    return (
        <>
            <h1>Post</h1>
            <button onClick={onClick}></button>
        </>
    )
}

export default Post