import React from 'react';
import { connect } from 'react-redux';

type Props = {
    user: TEMP_any;
};

const Dashboard: React.FunctionComponent<Props> = ({ user }) => (
    <div>Welcome back, {user.name}</div>
);

const mapStateToProps = (state: TEMP_any): TEMP_any => ({
    user: state.user.user,
});

export default connect(
    mapStateToProps,
    {}
)(Dashboard);
