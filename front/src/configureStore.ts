import { applyMiddleware, createStore } from "redux";
import { History } from "history";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";
import rootReducer from "./reducers";

export default function configureStore (history: History) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer(history),
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);
  return store;
}

