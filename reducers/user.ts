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
        default:
            return state;
    }
};

export default userReducer;
