import { reducer as formReducer } from 'redux-form'
import routerReducer from './router'

export default {
  router: routerReducer,
  form: formReducer,
}
