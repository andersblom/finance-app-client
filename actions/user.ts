import axios from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction, ActionCreator } from 'redux';
import Router from 'next/router';

import { User } from 'typings/interfaces';

export const userActions = {
    SET: 'user/SET',
    SET_ERROR: 'user/SET_ERROR',
};

export interface SetUserAction {
    type: string;
    payload: User;
}

export const setUser: ActionCreator<SetUserAction> = (user: User) => {
    return { type: userActions.SET, payload: user };
};

export interface SetUserErrorAction {
    type: string;
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
        const response = await axios.post(`${process.env.API_URL}/login`, {
            email,
            password,
        });
        dispatch(setUser(response.data));
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
