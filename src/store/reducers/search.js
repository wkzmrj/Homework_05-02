import { handleActions } from "redux-actions"
import { search_products_success } from "../actions/search"

const initialState = {
  results: []
}

const searchReducer = handleActions(
  {
    [search_products_success]: (state, action) => ({
      results: action.payload.results
    })
  },
  initialState
)

export default searchReducer
