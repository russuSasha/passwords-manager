export default (schema) => (values) => {
  const result = schema.validate(values, { abortEarly: false })
  if (!result.error) {
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
