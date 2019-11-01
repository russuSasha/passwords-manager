import { reducer as formReducer } from 'redux-form'
import reducers from './modules'

export default {
  form: formReducer,
  ...reducers,
}
