import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { firebaseStateReducer } from 'react-redux-firebase'

import {

} from '../modules';

export const rootInitialState = {
}

export let rootReducer = combineReducers({
	form: formReducer,
	firebase: firebaseStateReducer
});
