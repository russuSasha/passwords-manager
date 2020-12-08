import { configureStore } from '@reduxjs/toolkit'
import persistState from 'redux-localstorage'
import rootReducer from './reducers'
import initialState from './initialState'

export default configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: initialState,
  enhancers: [persistState(['passwords'])],
})
