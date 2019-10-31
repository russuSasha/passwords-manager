import uuidv1 from 'uuid/v1'
import { handleActions, createAction } from 'redux-actions'
import initialState from '../initialState'

const namespace = 'PASSWORD'

const CREATE_PASSWORD = `CREATE_${namespace}`

export const createPassword = createAction(CREATE_PASSWORD)

export default handleActions(
  {
    [createPassword]: (state, { payload }) => {
      const { site, userName, password } = payload

      const newItem = {
        id: uuidv1(),
        site,
        userName,
        password,
      }

      return {
        ...state,
        items: [newItem, ...state.items],
      }
    },
  },
  initialState.passwords
)
