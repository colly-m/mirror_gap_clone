import { createStore, applyMiddleware } from 'redux';
import thunk from '../middlewares/thunkMiddleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import loggerMiddleware from '../middlewares/loggerMiddleware';
import errorMiddleware from '../middlewares/errorMiddleware';
import apiMiddleware from '../middlewares/apiMiddleware';

const middleware = [thunk, loggerMiddleware, errorMiddleware, apiMiddleware];

const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)));

export default store;