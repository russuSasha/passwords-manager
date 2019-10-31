import React from 'react'
import { connect } from 'react-redux'
import { Grid, Paper } from '@material-ui/core'
import PROP_TYPES from 'constants/propTypes'

const HomeDashboard = ({ passwords }) => (
  <Grid container direction="column" justify="flex-start" alignItems="center">
    Passwords
    {passwords.map(({ id, site, userName, password }) => (
      <React.Fragment key={id}>
        <Grid item>
          <Paper>{site}</Paper>
          <Paper>{userName}</Paper>
          <Paper>{password}</Paper>
        </Grid>
      </React.Fragment>
    ))}
  </Grid>
)

HomeDashboard.defaultProps = {
  passwords: [],
}

HomeDashboard.propTypes = {
  passwords: PROP_TYPES.arrayOfObjects,
}

export default connect(({ passwords: { items: passwords } }) => ({
  passwords,
}))(HomeDashboard)
