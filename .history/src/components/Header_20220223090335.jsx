import React from 'react'
import ProTypes from 'prop-types'

const Header = ({ text, bgColor, textColor }) => {
  return (
    <header>
        
        <h1>{text}</h1>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
}

Header.proTypes = {
    text: ProTypes.string,
}

export default Header