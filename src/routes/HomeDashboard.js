import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper, Button } from '@material-ui/core'
import { CREATE_PASSWORD_ROUTE, EDIT_PASSWORD_ROUTE } from 'constants/routes'
import PROP_TYPES from 'constants/propTypes'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    width: '100%',
  },
}))
// TODO: add search
const HomeDashboard = ({ passwords }) => {
  const classes = useStyles()

  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <h2>Passwords</h2>
        <Link to={CREATE_PASSWORD_ROUTE}>
          <Button variant="outlined">Add new</Button>
        </Link>
      </Grid>
      <br />
      <Grid container spacing={3}>
        {passwords.map(({ id: passwordId, site, userName, password }) => (
          <Grid key={passwordId} container item xs={12} spacing={1}>
            <Grid item xs={3}>
              <Paper className={classes.paper}>{site}</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>{userName}</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>{password}</Paper>
            </Grid>
            <Grid item xs={3}>
              <Link to={EDIT_PASSWORD_ROUTE.populateURLParams({ passwordId })}>
                <Button className={classes.button} variant="outlined">
                  Edit
                </Button>
              </Link>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
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
