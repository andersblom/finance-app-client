import React from 'react';
import { connect } from 'react-redux';

import { logUserIn as logUserInAction } from 'actions/user';
import LoginForm from 'components/LoginForm/LoginForm';
import { User } from 'typings/interfaces';

type Props = {
    logUserIn;
    user: User;
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
        </div>
    );
};

const mapStateToProps = (state: TEMP_any): TEMP_any => ({
    user: state.user.authenticated,
    error: state.user.error,
});

export default connect(
    mapStateToProps,
    {
        logUserIn: logUserInAction,
    }
)(LoginIndex);
