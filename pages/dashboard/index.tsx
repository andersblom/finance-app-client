import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Header from 'components/Header/Header';
import { User } from 'typings/interfaces';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

type Props = {
    user: User;
};

const Dashboard: React.FunctionComponent<Props> = ({ user }) => (
    <PrivateRoute>
        <Fragment>
            <Header />
            <div>Welcome back, {user && user.name}!</div>
        </Fragment>
    </PrivateRoute>
);

const mapStateToProps = (state: TEMP_any): TEMP_any => ({
    user: state.user.authenticated,
});

export default connect(
    mapStateToProps,
    {}
)(Dashboard);
