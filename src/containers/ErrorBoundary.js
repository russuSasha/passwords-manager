import React, { Component } from 'react'
import styled from 'styled-components'
import PROP_TYPES from '../constants/propTypes'

const Container = styled.div`
  margin: 0 auto;
  padding: 100px;
  font-size: 32px;
  width: 600px;
`

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = { error: null }
  }

  componentDidCatch(error) {
    this.setState({
      error,
    })
  }

  render() {
    const { error } = this.state
    const { children } = this.props

    if (error) {
      return (
        <Container>
          <h2>Something went wrong</h2>
          <a href="/">
            <button type="button">Go to main page</button>
          </a>
        </Container>
      )
    }

    return children
  }
}

ErrorBoundary.propTypes = {
  children: PROP_TYPES.children.isRequired,
}

export default ErrorBoundary
