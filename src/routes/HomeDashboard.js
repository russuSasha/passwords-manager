import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Paper } from '@material-ui/core'
import PROP_TYPES from 'constants/propTypes'

const ContainerStyled = styled(Container)`
  padding-top: 50px;
`

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

const HomeDashboard = ({ passwords }) => {
  const classes = useStyles()

  return (
    <ContainerStyled maxWidth="sm">
      <h2>Passwords</h2>
      <Grid container spacing={3}>
        {passwords.map(({ id, site, userName, password }) => (
          <Grid key={id} container item xs={12} spacing={1}>
            <Grid item xs={4}>
              <Paper className={classes.paper}>{site}</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>{userName}</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>{password}</Paper>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </ContainerStyled>
  )
}

HomeDashboard.defaultProps = {
  passwords: [],
}

HomeDashboard.propTypes = {
  passwords: PROP_TYPES.arrayOfObjects,
}

export default connect(({ passwords: { items: passwords } }) => ({
  passwords,
}))(HomeDashboard)
