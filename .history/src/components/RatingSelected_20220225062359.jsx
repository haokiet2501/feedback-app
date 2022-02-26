import React, {useState} from 'react'

function RatingSelected() {
    const [selected, setSelecred] = useState(10)
    return (
        <ul className='rating'>
            <li>
                <input 
                    type="radio" 
                    id='num1'
                />
            </li>
        </ul>
    )
}

export default RatingSelected