import React from 'react'
import {useParams} from 'react-router-dom'

function Post() {
    const param = useParams()

    return (
        <>
            <h1>POST {param.id}</h1>
            <p>Name: {Kiet}</p>
        </>
    )
}

export default Post