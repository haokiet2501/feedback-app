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
                    id='num6'
                    name='rating'
                    value='6'
                    onChange={handleChange}
                    checked={selected === 6}
                />
                <label htmlFor="num6">6</label>
            </li>
            <li>
                <input 
                    type="radio" 
                    id='num7'
                    name='rating'
                    value='7'
                    onChange={handleChange}
                    checked={selected === 7}
                />
                <label htmlFor="num7">7</label>
            </li>
            <li>
                <input 
                    type="radio" 
                    id='num8'
                    name='rating'
                    value='8'
                    onChange={handleChange}
                    checked={selected === 8}
                />
                <label htmlFor="num8">8</label>
            </li>
            <li>
                <input 
                    type="radio" 
                    id='num9'
                    name='rating'
                    value='9'
                    onChange={handleChange}
                    checked={selected === 9}
                />
                <label htmlFor="num9">9</label>
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