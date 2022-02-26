import React from 'react'
import PropTypes from 'prop-types'

function Button({ children, version, type, isDisabled }) {
  return (
    <buttn type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </buttn>
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
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Button