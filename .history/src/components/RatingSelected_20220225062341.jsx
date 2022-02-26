import React, {useState} from 'react'

function RatingSelected() {
    const [selected, setSelecred] = useState(10)
    return (
        <ul className='rating'>
            <li>
                <input type="text" />
            </li>
        </ul>
    )
}

export default RatingSelected