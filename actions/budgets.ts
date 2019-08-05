import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction, ActionCreator } from 'redux';

import api from 'lib/api';
import { Budget, ApplicationState } from 'typings/interfaces';

export const budgetActions = {
    GET_ALL: 'budgets/GET_ALL',
    SET_ALL: 'budgets/SET_ALL',
};

export interface SetAllBudgetsAction extends AnyAction {
    payload: Budget[];
}

export const setAllBudgets: ActionCreator<SetAllBudgetsAction> = (
    budgets: Budget[]
) => {
    return { type: budgetActions.SET_ALL, payload: budgets };
};

export const getAllBudgets = (): ThunkAction<
    Promise<void>,
    ApplicationState,
    {},
    AnyAction
> => async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getState
): Promise<void> => {
    const { user } = getState();

    try {
        if (user.authenticated) {
            const response = await api.get('budgets', {
                headers: {
                    Authorization: `Bearer ${user.authenticated.token}`,
                },
            });
            dispatch(setAllBudgets(response.data));
        }
    } catch (err) {
        console.error(err);
    }
};
