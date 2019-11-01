import React from 'react'
import styled from 'styled-components'
import { Container } from '@material-ui/core'
import PROP_TYPES from 'constants/propTypes'

const ContainerStyled = styled(Container)`
  padding-top: 50px;
`

const Layout = ({ children }) => (
  <ContainerStyled maxWidth="sm">{children}</ContainerStyled>
)

Layout.propTypes = {
  children: PROP_TYPES.children.isRequired,
}

export default Layout
