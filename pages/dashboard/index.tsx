import React from 'react';
import { connect } from 'react-redux';

import { User } from 'typings/interfaces';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

type Props = {
    user: User;
};

const Dashboard: React.FunctionComponent<Props> = ({ user }) => (
    <PrivateRoute>
        <div>Welcome back, {user && user.name}</div>
    </PrivateRoute>
);

const mapStateToProps = (state: TEMP_any): TEMP_any => ({
    user: state.user.authenticated,
});

export default connect(
    mapStateToProps,
    {}
)(Dashboard);
