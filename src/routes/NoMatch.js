import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  margin: 0 auto;
  padding: 100px;
  font-size: 32px;
  width: 600px;
`

const NoMatch = () => (
  <Container>
    <p>No match</p>
    <Link to="/">
      <button type="button">Go to main page</button>
    </Link>
  </Container>
)

export default NoMatch
