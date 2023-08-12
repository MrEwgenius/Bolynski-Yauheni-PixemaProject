import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import themReducer from './redusers/themeSlice';
import postReduser from './redusers/postSlice';
import authReducer from './redusers/authSlice';
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        themReducer,
        authReducer,
        postReduser,
    },
    middleware: [sagaMiddleware]
})
sagaMiddleware.run(rootSaga)

export type Rootstate = ReturnType<typeof store.getState>

export default store;