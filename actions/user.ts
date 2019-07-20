import axios from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export const userActions = {
    SET: 'user/SET',
};

export interface SetAction {
    type: string;
    payload: {
        token: string;
        user: TEMP_any;
    };
}

export const setUser = (token: string, user: TEMP_any): SetAction => {
    return { type: userActions.SET, payload: { token, user } };
};

export const logUserIn = (
    email: string,
    password: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => (
    dispatch: ThunkDispatch<{}, {}, AnyAction>
): Promise<void> => {
    return axios
        .post('http://finance-app-api.test/api/login', {
            email,
            password,
        })
        .then(res => {
            dispatch(setUser(res.data.token, res.data.user));
        });
};
