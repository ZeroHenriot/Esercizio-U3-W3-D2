export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'
export const GET_JOBS = 'GET_JOBS'

export const addToFavourtesAction = (data) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: data,
  }
}

export const removeFromFavourtesAction = (i) => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    payload: i,
  }
}

export const getJobsAction = (baseEndpoint, query) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(baseEndpoint + query + '&limit=20')
      if (resp.ok) {
        let { data } = await resp.json()
        dispatch({
          type: GET_JOBS,
          payload: data,
        })
      } else {
        throw new Error('errore nel recupero dei libri')
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export default getJobsAction
