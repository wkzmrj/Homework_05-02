import { handleActions } from "redux-actions"
import { get_products_success } from "../actions/products"

const initialState = {
  sold: [],
  createdAt: []
}

const productsReducer = handleActions(
  {
    [get_products_success]: (state, action) => ({
      ...state,
      [action.payload.sortBy]: action.payload.products
    })
  },
  initialState
)

export default productsReducer
