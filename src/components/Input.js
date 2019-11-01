import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'

const TextFieldStyled = styled(TextField)`
  width: 100%;
`

const Input = ({ input, type = 'text', meta = {}, label }) => {
  const isInvalid = meta.touched && meta.error

  return (
    <TextFieldStyled
      error={!!isInvalid}
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
