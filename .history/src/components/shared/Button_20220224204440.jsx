import React from 'react'
import PropTypes from 'prop-types'

function Button({ children, version, type, isDisabled }) {
  return (
    <butotn type={type} disabled={isDisabled} className={}>
        {children}
    </butotn>
  )
}

export default Button