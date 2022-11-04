import { connectRouter } from "connected-react-router"
import { combineReducers } from "redux"
import filterReducer from "./filter"
import productReducer from "./product"
import productsReducer from "./products"
import searchReducer from "./search"
import signupReducer from "./signup"



const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    signup: signupReducer,
    products: productsReducer,
    search: searchReducer,
    filter: filterReducer,
    product: productReducer
  })

export default createRootReducer
