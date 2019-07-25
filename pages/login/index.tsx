import React from 'react';
import { connect } from 'react-redux';

import { logUserIn as logUserInAction } from 'actions/user';
import LoginForm from 'components/LoginForm/LoginForm';

import { LoginPageContainer } from './styles';

type Props = {
    logUserIn;
    error: string;
};

const LoginIndex: React.FunctionComponent<Props> = ({ logUserIn, error }) => {
    const handleSubmit = (e: React.FormEvent): Action => {
        e.preventDefault();
        return logUserIn(e.target[0].value, e.target[1].value);
    };
    return (
        <LoginPageContainer>
            <div className="login-form-panel">
                <div>Login</div>
                <LoginForm onSubmit={handleSubmit} />
                {error && <div>{error}</div>}
            </div>
        </LoginPageContainer>
    );
};

const mapStateToProps = (state: TEMP_any): TEMP_any => ({
    error: state.user.error,
});

export default connect(
    mapStateToProps,
    {
        logUserIn: logUserInAction,
    }
)(LoginIndex);
