// src/redux/store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  // your reducers
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
