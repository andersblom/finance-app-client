import { userActions } from 'actions/user';

export interface User {
    id: number;
    name: string;
    email: string;
}

export interface UserState {
    token?: string;
    user?: User;
}

const userReducer = (state: UserState = {}, action: Action) => {
    switch (action.type) {
        case userActions.SET:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
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
