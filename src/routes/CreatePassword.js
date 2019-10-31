import React from 'react'
import { connect } from 'react-redux'
import { PasswordCreateEditForm } from 'containers'
import { passwords as passwordsModule } from 'redux/modules'
import { HOME_DASHBOARD_ROUTE } from 'constants/routes'
import PROP_TYPES from 'constants/propTypes'

const CreatePassword = ({ history, createPassword }) => {
  const goBack = () => history.push(HOME_DASHBOARD_ROUTE)

  const onSubmit = values => createPassword(values).then(goBack)

  return (
    <PasswordCreateEditForm
      form="passwordCreate"
      caption="Create password"
      onSubmit={onSubmit}
    />
  )
}

CreatePassword.propTypes = {
  history: PROP_TYPES.history.isRequired,
  createPassword: PROP_TYPES.func.isRequired,
}

export default connect(
  ({
    articles: {
      current: { articlesCategories },
    },
  }) => ({ articlesCategories }),
  {
    createPassword: passwordsModule.createPassword,
  }
)(CreatePassword)
