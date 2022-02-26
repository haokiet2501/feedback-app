import React from 'react'
import { useParams } from 'react-router-dom'

function Post() {
    const params = useParams()

    return (
        <>
            <h1>POST {params.id}</h1>
            <p>Name: {param.name}</p>
        </>
    )
}

export default Post