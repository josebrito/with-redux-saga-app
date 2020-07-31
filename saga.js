import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import {
  actionTypes,
  failure,
  loadDataSuccess,
  tickClock,
  loadData2Success,
} from "./actions";

function* runClockSaga() {
  yield take(actionTypes.START_CLOCK);
  while (true) {
    yield put(tickClock(false));
    yield delay(1000);
  }
}

function* loadDataSaga() {
  try {
    console.log("## loadDataSaga");
    yield delay(3000);
    const res = yield fetch("https://jsonplaceholder.typicode.com/users");
    console.log("## loadDataSaga res", res ? "RESPONDED OK!!" : "NO RESPONSE");
    const data = yield res.json();
    yield put(loadDataSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}

function* loadData2Saga() {
  try {
    console.log("## loadDataSaga - 2");
    yield delay(5000);
    const data = { name: "John Doe", age: 33 };
    console.log("## loadDataSaga - 2 OKKKKK!!");
    yield put(loadData2Success(data));
  } catch (err) {
    yield put(failure(err));
  }
}

function* rootSaga() {
  yield all([
    call(runClockSaga),
    takeLatest(actionTypes.LOAD_DATA, loadDataSaga),
    takeLatest(actionTypes.LOAD_DATA_2, loadData2Saga),
  ]);
}

export default rootSaga;
