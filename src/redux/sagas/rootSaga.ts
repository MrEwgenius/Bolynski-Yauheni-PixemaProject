import { all } from 'redux-saga/effects'

// import authSaga from './authSaga'
import postSagaWatcher from './postSaga'




export default function* rootSaga() {

    yield all([postSagaWatcher()])


}