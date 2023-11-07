import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from '../actions'

const initialState = {
  jobs: [],
}

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: {
          ...state.favourites,
          jobs: [...state.favourites.jobs, action.payload],
        },
      }
    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        favourites: {
          ...state.favourites,
          jobs: state.favourites.jobs.filter((job, i) => i !== action.payload),
        },
      }
    default:
      return state
  }
}

export default favouritesReducer
