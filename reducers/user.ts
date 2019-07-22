import { userActions } from 'actions/user';

import { User } from 'typings/interfaces';

export interface UserState {
    authenticated?: User;
    error?: string;
}

const userReducer = (state: UserState = {}, action: Action) => {
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
