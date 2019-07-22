import React from 'react';
import { connect } from 'react-redux';
import { logUserIn as logUserInAction } from 'actions/user';

import LoginForm from 'components/LoginForm/LoginForm';

type Props = {
    logUserIn;
    user;
    error: string;
};

const LoginIndex: React.FunctionComponent<Props> = ({
    logUserIn,
    user,
    error,
}) => {
    const handleSubmit = (e: React.FormEvent): Action => {
        e.preventDefault();
        return logUserIn(e.target[0].value, e.target[1].value);
    };
    return (
        <div>
            <div>
                <div>Login</div>
                <LoginForm onSubmit={handleSubmit} />
                {error && <div>{error}</div>}
            </div>
            <hr />
            {user && (
                <div>
                    <div>Success! Current user:</div>
                    <div>{user.name}</div>
                    <div>{user.email}</div>
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state: TEMP_any): TEMP_any => {
    return {
        user: state.user.user,
        error: state.user.error,
    };
};

export default connect(
    mapStateToProps,
    {
        logUserIn: logUserInAction,
    }
)(LoginIndex);
