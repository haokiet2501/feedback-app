import React, {useState} from 'react'

function RatingSelected() {
    const [selected, setSelecred] = useState(10)
    return (
        <ul className='rating'>
            <li>
                <input 
                    type="radio" 
                    id='num1'
                    name='rating'
                    value='1'
                    onChange={handleChange}
                    checked={selected}
                />
            </li>
        </ul>
    )
}

export default RatingSelected