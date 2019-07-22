import axios from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export const userActions = {
    SET: 'user/SET',
    SET_ERROR: 'user/SET_ERROR',
};

export interface SetUserAction {
    type: string;
    payload: {
        token: string;
        user: TEMP_any;
    };
}

export const setUser = (token: string, user: TEMP_any): SetUserAction => {
    return { type: userActions.SET, payload: { token, user } };
};

export interface SetUserErrorAction {
    type: string;
    payload: string;
}

export const setUserError = (error: string): SetUserErrorAction => {
    return {
        type: userActions.SET_ERROR,
        payload: error,
    };
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
        })
        .catch(err => {
            console.dir(err.response.status);
            if (err.response.status == 401) {
                // dispatch login incorrect error
                dispatch(
                    setUserError('User/password combination does not exist')
                );
            }
            setUserError('Something went wrong! Please try again.');
        });
};
