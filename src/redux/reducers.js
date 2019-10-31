import { reducer as formReducer } from 'redux-form'
import routerReducer from './router'
import reducers from './modules'

export default {
  router: routerReducer,
  form: formReducer,
  ...reducers,
}
