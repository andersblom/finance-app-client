import React, { Fragment, useEffect } from 'react';
import Router from 'next/router';
import { useStore } from 'react-redux';

type Props = {
    children: React.ReactElement;
};

const PrivateRoute: React.FunctionComponent<Props> = ({ children }) => {
    const { user } = useStore().getState();
    useEffect(() => {
        if (!user.authenticated) {
            Router.push('/login');
        }
    }, []);

    if (!user.authenticated) {
        return <Fragment>loading</Fragment>;
    }

    return <Fragment>{children}</Fragment>;
};

export default PrivateRoute;
