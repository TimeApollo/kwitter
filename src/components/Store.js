import { kwitterReducer } from './Reducer';
import { createStore } from 'redux';

const store = createStore(
  kwitterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export {store};