import { Reducer } from 'redux';
import { userActions } from 'actions/user';

import { UserState } from 'typings/interfaces';

export const initialState: UserState = {};

const userReducer: Reducer<UserState> = (
    state: UserState = initialState,
    action
) => {
    switch (action.type) {
        case userActions.SET:
            return {
                ...state,
                authenticated: action.payload,
            };
        case userActions.SET_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
