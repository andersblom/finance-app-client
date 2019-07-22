import { combineReducers, Reducer } from 'redux';

import { ApplicationState } from 'typings/interfaces';

import user from './user';

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
    user,
});

export default reducers;
