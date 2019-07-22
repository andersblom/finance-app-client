import axios from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import Router from 'next/router';

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
): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>
): Promise<void> => {
    try {
        const res = await axios.post('http://finance-app-api.test/api/login', {
            email,
            password,
        });
        dispatch(setUser(res.data.token, res.data.user));
        Router.push('/dashboard');
    } catch (err) {
        console.dir(err.response.status);
        if (err.response.status == 401) {
            /**
             * User credentials were incorrect.
             */
            dispatch(setUserError('User/password combination does not exist'));
        }
        /**
         * Fall back for any kind of error.
         */
        setUserError('Something went wrong! Please try again.');
    }
};
