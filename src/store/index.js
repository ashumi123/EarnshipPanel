import { createStore, applyMiddleware,compose } from "redux";
import rootReducer from "./reducers";
// Dev tools
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
const sagaMiddleware = createSagaMiddleware();

export const configureStore = () => {

  const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  ));

  sagaMiddleware.run(rootSaga);
  return store;
}
