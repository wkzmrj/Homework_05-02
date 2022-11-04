import axios from "axios"
import { takeEvery, put } from "redux-saga/effects"
import { search_products, search_products_success } from "../actions/search"
import { API } from "../../config"

function* handleSearchProducts(action) {
  const response = yield axios.get(`${API}/products/search`, {
    params: action.payload
  })
  yield put(search_products_success({ results: response.data }))
}

export default function* searchSaga() {
  yield takeEvery(search_products, handleSearchProducts)
}
