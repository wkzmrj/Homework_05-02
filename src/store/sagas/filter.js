import axios from "axios"
import { takeEvery, put } from "redux-saga/effects"
import { filter_products, filter_products_success } from "../actions/filter"
import { API } from "../../config"

function* handleFilterProducts(action) {
  let response = yield axios.post(`${API}/products/filter`, action.payload)
  yield put(
    filter_products_success({ skip: action.payload.skip, ...response.data })
  )
}

export default function* filterSaga() {
  yield takeEvery(filter_products, handleFilterProducts)
}
