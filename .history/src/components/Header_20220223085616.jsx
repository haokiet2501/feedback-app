import React from 'react'
import ProTypes from 'prop-types'

const Header = ({ text }) => {
  return (
    <div style={{color: 'red', backgroundColor: 'blue'}}>
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