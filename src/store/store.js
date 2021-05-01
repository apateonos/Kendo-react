import { createStore } from 'redux';
import rootReducer from './reducer/index.js';

function configureStore() {
  const store = createStore(rootReducer);
  return store;
}

const rootStore = configureStore();

export default rootStore;