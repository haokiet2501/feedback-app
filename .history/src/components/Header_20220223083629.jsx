import React from 'react'
import ProTypes from ''
const Header = ({ text }) => {
  return (
    <div>
        <h1>{text}</h1>
    </div>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
}

export default Header