import PropTypes from 'prop-types'

const children = PropTypes.oneOfType([
  PropTypes.element.isRequired,
  PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
])

export default {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.arrayOf(children).isRequired,
  ]),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired,
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      title: PropTypes.string,
    }).isRequired
  ),
  id: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  className: PropTypes.string,
  arrayOfObjects: PropTypes.arrayOf(PropTypes.object.isRequired),
  arrayOfNumbers: PropTypes.arrayOf(PropTypes.number.isRequired),
  func: PropTypes.func,
  arrayOf: PropTypes.arrayOf,
  any: PropTypes.any,
  string: PropTypes.string,
  bool: PropTypes.bool,
  shape: PropTypes.shape,
  date: PropTypes.instanceOf(Date),
  number: PropTypes.number,
  stringOrNumber: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
}
