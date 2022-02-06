import { call, put, takeLatest, select } from 'redux-saga/effects';
import {
  setPopularHotels,
  getPopularHotels,
  setAvailableHotels,
  getAvailableHotels,
} from '../actions/hotelsActions';

import { apiHotelsUrl, apiPopularHotelsUrl, getData } from '../constants/urls';

function* getPopularHotelsSaga() {
  try {
    const popularHotels = yield call(getData, apiPopularHotelsUrl);
    yield put(setPopularHotels(popularHotels));
  } catch (err) {
    console.log('Error:', err.message);
  }
}

function* getAvailableHotelsSaga() {
  try {
    const queryParams = yield select((state) => state.query);
    const availableHotels = yield call(getData, apiHotelsUrl, queryParams);
    yield put(setAvailableHotels(availableHotels));
  } catch (err) {
    console.log('Error:', err.message);
  }
}

function* hotelsSaga() {
  yield takeLatest(getPopularHotels, getPopularHotelsSaga);
  yield takeLatest(getAvailableHotels, getAvailableHotelsSaga);
}

export default hotelsSaga;
