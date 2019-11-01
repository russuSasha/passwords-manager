import React from 'react'
import { connect } from 'react-redux'
import { PasswordCreateEditForm } from 'containers'
import { passwords as passwordsModule } from 'redux/modules'
import { HOME_DASHBOARD_ROUTE } from 'constants/routes'
import PROP_TYPES from 'constants/propTypes'

const EditPassword = ({
  history,
  match: {
    params: { passwordId },
  },
  currentPasswordItem,
  updatePassword,
  removePassword,
}) => {
  const goBack = () => history.push(HOME_DASHBOARD_ROUTE)

  const onSubmit = values => {
    updatePassword({ passwordId, ...values })

    goBack()
  }

  const handleDelete = () => {
    removePassword(passwordId)

    goBack()
  }

  return (
    <PasswordCreateEditForm
      form="passwordEdit"
      initialValues={currentPasswordItem}
      caption="Edit password"
      onSubmit={onSubmit}
      goBack={goBack}
      isDeleteButtonShown
      handleDelete={handleDelete}
    />
  )
}

EditPassword.defaultProps = {
  currentPasswordItem: {},
}

EditPassword.propTypes = {
  history: PROP_TYPES.history.isRequired,
  match: PROP_TYPES.match.isRequired,
  currentPasswordItem: PROP_TYPES.shape(),
  updatePassword: PROP_TYPES.func.isRequired,
  removePassword: PROP_TYPES.func.isRequired,
}

export default connect(
  (
    { passwords },
    {
      match: {
        params: { passwordId },
      },
    }
  ) => ({
    currentPasswordItem: passwords.items.findById(passwordId) || {},
  }),
  {
    updatePassword: passwordsModule.updatePassword,
    removePassword: passwordsModule.removePassword,
  }
)(EditPassword)
