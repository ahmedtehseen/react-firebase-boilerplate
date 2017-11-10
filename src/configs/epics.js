import { combineEpics, createEpicMiddleware } from 'redux-observable';

import {  } from '../modules';

const epics = combineEpics(
	// CounterEpic.increment,
);

export const epicMiddleware = createEpicMiddleware(epics);