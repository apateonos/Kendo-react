import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducer/index';
import rootSaga from './saga/index';

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers =
    (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware));
  const store = createStore(rootReducer, enhancers);
  
  rootSaga.map(sagaMiddleware.run);
  return store;
}

const rootStore = configureStore();

export default rootStore;