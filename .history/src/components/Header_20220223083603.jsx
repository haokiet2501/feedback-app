import React from 'react'
import Prop
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