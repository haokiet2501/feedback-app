import React from 'react'
import PropTypes from 'prop-types'

function Button({ children, version, type, isDisabled }) {
  return (
    <butotn type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </butotn>
  )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false,
}

Button.proTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    
}

export default Button