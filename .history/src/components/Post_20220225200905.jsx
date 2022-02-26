import React from 'react'
import {useParams} from 'react-router-dom'

function Post() {
    const param = useParams()

    return (
     <div>
        Post {param.id}</div>
    
}

export default Post