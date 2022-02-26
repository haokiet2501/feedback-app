import React from 'react'
import ProTypes from 'prop-types'

const Header = ({ text }) => {

  return (
    <header>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'blue',
    textColor: 'red'
}

Header.proTypes = {
    text: ProTypes.string,
    bgColor: ProTypes.string,
    textColor: ProTypes.string,
}

export default Header