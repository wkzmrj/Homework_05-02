import axios from "axios"
import { takeEvery, put } from "redux-saga/effects"
import {
  get_product_by_id,
  get_product_by_id_success
} from "../actions/product"
import { API } from "../../config"

function* handleProductById(action) {
  let response = yield axios.get(`${API}/product/${action.payload.productId}`)
  yield put(get_product_by_id_success(response.data))
}

export default function* productSaga() {
  yield takeEvery(get_product_by_id, handleProductById)
}
