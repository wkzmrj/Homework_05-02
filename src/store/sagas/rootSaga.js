import { all } from "redux-saga/effects"
import filterSaga from "./filter"
import productSaga from "./product"
import productsSaga from "./products"
import searchSaga from "./search"
import signupSaga from "./signup"

export default function* rootSaga() {
  yield all([
    signupSaga(),
    productsSaga(),
    searchSaga(),
    filterSaga(),
    productSaga()
  ])
}