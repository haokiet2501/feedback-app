import React from 'react'
import {useParams} from 'react-router-dom'

function Post() {
    const param = useParams()

    return (
        <>
            Post {param.id}
        </>
    )
}

export default Post