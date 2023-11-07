import { combineReducers, configureStore } from '@reduxjs/toolkit'
import jobsReducer from '../reducers/jobs'
import favouritesReducer from '../reducers/favourites'

const bigReducer = combineReducers({
  jobs: jobsReducer,
  favourites: favouritesReducer,
})

const store = configureStore({
  reducer: bigReducer,
})

export default store
