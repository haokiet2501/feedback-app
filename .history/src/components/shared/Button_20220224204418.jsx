import React from 'react'
import PropTypes from 'prop-types'

function Button({ children, version, type, isDisabled }) {
  return (
    <butotn type={type}>
        {children}
    </butotn>
  )
}

export default Button