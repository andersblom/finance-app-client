import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction, ActionCreator } from 'redux';
import Router from 'next/router';
import jsCookie from 'js-cookie';

import api from 'lib/api';
import { User } from 'typings/interfaces';

export const userActions = {
    SET: 'user/SET',
    SET_ERROR: 'user/SET_ERROR',
};

export interface SetUserAction extends AnyAction {
    payload: User;
}

export const setUser: ActionCreator<SetUserAction> = (user: User) => {
    return { type: userActions.SET, payload: user };
};

export interface SetUserErrorAction extends AnyAction {
    payload: string;
}

export const setUserError: ActionCreator<SetUserErrorAction> = (
    error: string
) => {
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
        const response = await api.post(`login`, {
            email,
            password,
        });
        dispatch(setUser(response.data));
        jsCookie.set('finance_app_auth_key', response.data.token);
        Router.push('/dashboard');
    } catch (err) {
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

export const getUserFromToken = (
    token: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>
): Promise<void> => {
    try {
        const response = await api.get('/user', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        dispatch(
            setUser({
                ...response.data,
                token,
            })
        );
    } catch (err) {
        console.log(err);
    }
};
