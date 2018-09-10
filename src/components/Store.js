import { kwitterReducer } from './Reducer';
import { createStore , applyMiddleware , compose } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const history = createBrowserHistory({basename: process.env.PUBLIC_URL});

const store = createStore(
  connectRouter(history)(kwitterReducer),
  composeEnhancers(applyMiddleware(routerMiddleware(history),thunk))
);

export {store};