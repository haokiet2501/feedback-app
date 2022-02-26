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
                    checked={selected === 1}
                />
                <label htmlFor="num1">1</label>
            </li>
            <li>
                <input 
                    type="radio" 
                    id='num1'
                    name='rating'
                    value='1'
                    onChange={handleChange}
                    checked={selected === 1}
                />
                <label htmlFor="num1">1</label>
            </li>
            <li>
                <input 
                    type="radio" 
                    id='num1'
                    name='rating'
                    value='1'
                    onChange={handleChange}
                    checked={selected === 1}
                />
                <label htmlFor="num1">1</label>
            </li>
            <li>
                <input 
                    type="radio" 
                    id='num1'
                    name='rating'
                    value='1'
                    onChange={handleChange}
                    checked={selected === 1}
                />
                <label htmlFor="num1">1</label>
            </li>
            <li>
                <input 
                    type="radio" 
                    id='num1'
                    name='rating'
                    value='1'
                    onChange={handleChange}
                    checked={selected === 1}
                />
                <label htmlFor="num1">1</label>
            </li>
            <li>
                <input 
                    type="radio" 
                    id='num1'
                    name='rating'
                    value='1'
                    onChange={handleChange}
                    checked={selected === 1}
                />
                <label htmlFor="num1">1</label>
            </li>
            <li>
                <input 
                    type="radio" 
                    id='num1'
                    name='rating'
                    value='1'
                    onChange={handleChange}
                    checked={selected === 1}
                />
                <label htmlFor="num1">1</label>
            </li>
            <li>
                <input 
                    type="radio" 
                    id='num1'
                    name='rating'
                    value='1'
                    onChange={handleChange}
                    checked={selected === 1}
                />
                <label htmlFor="num1">1</label>
            </li>
            <li>
                <input 
                    type="radio" 
                    id='num1'
                    name='rating'
                    value='1'
                    onChange={handleChange}
                    checked={selected === 1}
                />
                <label htmlFor="num1">9</label>
            </li>
            <li>
                <input 
                    type="radio" 
                    id='num7'
                    name='rating'
                    value='10'
                    onChange={handleChange}
                    checked={selected === 10}
                />
                <label htmlFor="num10">10</label>
            </li>
        </ul>
    )
}

export default RatingSelected