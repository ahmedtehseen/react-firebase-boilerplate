import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import * as firebase from 'firebase';

import { rootReducer, rootInitialState } from './reducers';
import { epicMiddleware } from './epics';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = createLogger({
  collapsed: true,
  predicate: (getState: Function, action: Object) => {
    if (action.type && action.type.startsWith('@@redux-form')) {
      return false
    } else {
      return true
    }
  }
});

var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

firebase.initializeApp(config)

export const store = createStore(rootReducer, rootInitialState, composeEnhancers(
  applyMiddleware(logger, epicMiddleware)
));
