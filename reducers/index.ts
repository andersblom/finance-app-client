import { combineReducers, Reducer } from 'redux';

import { ApplicationState } from 'typings/interfaces';

import user from './user';
import budgets from './budgets';

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
    user,
    budgets,
});

export default reducers;
