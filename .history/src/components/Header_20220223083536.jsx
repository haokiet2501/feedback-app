import React from 'react'

const Header = ({ text }) => {
  return (
    <div>
        <h1>{text}</h1>
    </div>
  )
}

Header.defaultProps = {
    
}

export default Header