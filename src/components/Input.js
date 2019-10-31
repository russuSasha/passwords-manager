import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

const Input = ({ input, type = 'text', meta = {}, label }) => {
  const isInvalid = meta.touched && meta.error

  return (
    <TextField
      id={!isInvalid ? 'standard-basic' : 'standard-error'}
      label={label}
      margin="normal"
      type={type}
      InputProps={{
        ...input,
      }}
    />
  )
}

Input.defaultProps = {
  type: 'text',
  meta: {},
  label: '',
}

Input.propTypes = {
  input: PropTypes.shape().isRequired,
  type: PropTypes.string,
  meta: PropTypes.shape(),
  label: PropTypes.string,
}

export default Input
