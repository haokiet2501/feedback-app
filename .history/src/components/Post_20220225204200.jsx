import React from 'react'
import { Navigate } from 'react-router-dom'

function Post() {
    const status = 200

    if(status === 404) {
        return <Navigate to='/not'
    }

    return (
        <>
            
        </>
    )
}

export default Post