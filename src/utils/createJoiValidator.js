import Joi from 'joi'

export default schema => values => {
  const result = Joi.validate(values, schema, { abortEarly: false })
  if (result.error === null) {
    return {}
  }

  return result.error.details.reduce((all, cur) => {
    const allErrors = { ...all }
    const path = cur.path[cur.path.length - 1]
    const { message } = cur

    if (Object.prototype.hasOwnProperty.call(allErrors, path)) {
      allErrors[path] += message
    } else {
      allErrors[path] = message
    }

    return allErrors
  }, {})
}
