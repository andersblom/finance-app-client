import React from 'react';
import { connect } from 'react-redux';

import { User } from 'typings/interfaces';

type Props = {
    user: User;
};

const Dashboard: React.FunctionComponent<Props> = ({ user }) => (
    <div>Welcome back, {user.name}</div>
);

const mapStateToProps = (state: TEMP_any): TEMP_any => ({
    user: state.user.authenticated,
});

export default connect(
    mapStateToProps,
    {}
)(Dashboard);
