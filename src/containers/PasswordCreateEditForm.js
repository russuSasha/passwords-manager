import React from 'react'
import PropTypes from 'prop-types'
import Joi from 'joi'
import { reduxForm, Field } from 'redux-form'
import { Container, Grid, Button } from '@material-ui/core'
import Input from 'components/Input'
import createJoiValidator from 'utils/createJoiValidator'
import PROP_TYPES from 'constants/propTypes'

const validationSchema = Joi.object().keys({
  site: Joi.string()
    .max(255)
    .required(),
  userName: Joi.string()
    .max(255)
    .required(),
  password: Joi.string()
    .max(255)
    .required(),
})

const PasswordCreateEditForm = ({
  caption,
  goBack,
  isDeleteButtonShown,
  handleDelete,
  handleSubmit,
  reset,
}) => (
  <Container maxWidth="sm">
    <Button variant="outlined" onClick={goBack}>
      go back
    </Button>
    <br />
    <br />
    {caption}
    <form>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Field name="site" label="Site" component={Input} />
        </Grid>
        <Field name="userName" label="User name" component={Input} />
        <Field name="password" label="Password" component={Input} />
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Button variant="outlined" onClick={reset}>
            Cancel
          </Button>
          <Button variant="outlined" color="primary" onClick={handleSubmit}>
            Save
          </Button>
          {isDeleteButtonShown && (
            <Button variant="outlined" color="secondary" onClick={handleDelete}>
              Delete
            </Button>
          )}
        </Grid>
      </Grid>
    </form>
  </Container>
)

PasswordCreateEditForm.defaultProps = {
  isDeleteButtonShown: false,
  handleDelete: () => 0,
}

PasswordCreateEditForm.propTypes = {
  form: PropTypes.string.isRequired, // eslint-disable-line
  initialValues: PropTypes.shape(), // eslint-disable-line
  caption: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired, // eslint-disable-line
  goBack: PropTypes.func.isRequired,
  isDeleteButtonShown: PROP_TYPES.bool,
  handleDelete: PROP_TYPES.func,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
}

export default reduxForm({
  validate: createJoiValidator(validationSchema),
})(PasswordCreateEditForm)
