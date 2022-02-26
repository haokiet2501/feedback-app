import React from 'react'
import ProTypes from 'prop-types'

const Header = ({ text, bgColor, textColor }) => {
  return (
    <div bgColor>
        <h1>{text}</h1>
    </div>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
}

Header.proTypes = {
    text: ProTypes.string,
}

export default Header