import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'reducers';

export function initializeStore (initialState = {}) {
  return createStore (
    rootReducer,
    initialState,
    compose (applyMiddleware (thunkMiddleware))
  );
}
