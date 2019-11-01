/* eslint-disable */
Array.prototype.updateById = function(id, data) {
  if (typeof data === 'object') {
    return this.map(item => (item.id === id ? { ...item, ...data } : item))
  }

  return this.map(item => (item.id === id ? data : item))
}

Array.prototype.findById = function(id) {
  return this.find(item => item.id === id)
}

Array.prototype.filterById = function(id) {
  return this.filter(item => item.id !== id)
}

String.prototype.populateURLParams = function(params) {
  let newString = this

  Object.entries(params).forEach(([key, value]) => {
    newString = newString.replace(`:${key}`, value)
  })

  return newString
}
