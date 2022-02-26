import React from 'react'
import ProTypes from 'prop-types'

const Header = ({ text, bgColor, textColor }) => {
  const handleStyles = {
      backgroundColor: bgColor,
      color: textColor
  }  
  return (
    <header style={handleStyles}>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0, 0, 0, 0',
    textColor: 'red'
}

Header.proTypes = {
    text: ProTypes.string,
    bgColor: ProTypes.string,
    textColor: ProTypes.string,
}

export default Header