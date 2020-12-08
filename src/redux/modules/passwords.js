import { v4 as uuidv4 } from 'uuid'
import { handleActions, createAction } from 'redux-actions'
import initialState from '../initialState'

const namespace = 'PASSWORD'

const CREATE_PASSWORD = `CREATE_${namespace}`
const UPDATE_PASSWORD = `UPDATE_${namespace}`
const REMOVE_PASSWORD = `REMOVE_${namespace}`

export const createPassword = createAction(CREATE_PASSWORD)
export const updatePassword = createAction(UPDATE_PASSWORD)
export const removePassword = createAction(REMOVE_PASSWORD)

export default handleActions(
  {
    [createPassword]: (state, { payload }) => {
      const { site, userName, password } = payload

      const newItem = {
        id: uuidv4(),
        site,
        userName,
        password,
      }

      return {
        ...state,
        items: [newItem, ...state.items],
      }
    },
    [updatePassword]: (
      state,
      { payload: { passwordId, ...passwordData } }
    ) => ({
      ...state,
      items: state.items.updateById(passwordId, passwordData),
    }),
    [removePassword]: (state, { payload: passwordId }) => ({
      ...state,
      items: state.items.filterById(passwordId),
    }),
  },
  initialState.passwords
)
