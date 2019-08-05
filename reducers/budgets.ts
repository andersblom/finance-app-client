import { Reducer } from 'redux';
import { budgetActions } from 'actions/budgets';

import { BudgetsState } from 'typings/interfaces';

export const initialState: BudgetsState = {};

const budgetsReducer: Reducer<BudgetsState> = (
    state: BudgetsState = initialState,
    action
) => {
    switch (action.type) {
        case budgetActions.SET_ALL:
            return {
                ...state,
                all: action.payload,
            };
        default:
            return state;
    }
};

export default budgetsReducer;
