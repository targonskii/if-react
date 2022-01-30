import { call, put, takeLatest, select } from 'redux-saga/effects';
import {
  setPopularHotels,
  getPopularHotels,
  setAvailableHotels,
  getAvailableHotels,
} from '../actions/hotelsActions';

import { apiHotelsUrl, apiPopularHotelsUrl, getData } from '../constants/urls';

function* getHotelsSaga({ type }) {
  try {
    if (type === getPopularHotels.toString()) {
      const popularHotels = yield call(getData, apiPopularHotelsUrl);
      yield put(setPopularHotels(popularHotels));
    }
    if (type === getAvailableHotels.toString()) {
      const queryParams = yield select(({ query }) => query);
      const availableHotels = yield call(getData, apiHotelsUrl, queryParams);
      yield put(setAvailableHotels(availableHotels));
    }
  } catch (err) {
    console.log('Error:', err.message);
  }
}

function* hotelsSaga() {
  yield takeLatest(getPopularHotels.toString(), getHotelsSaga);
  yield takeLatest(getAvailableHotels.toString(), getHotelsSaga);
}

export default hotelsSaga;
