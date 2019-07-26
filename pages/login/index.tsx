import React from 'react';
import { connect } from 'react-redux';

import { logUserIn as logUserInAction } from 'actions/user';
import LoginForm from 'components/LoginForm/LoginForm';
import { ApplicationState } from 'typings/interfaces';

import { LoginPageContainer, Header } from './styles';

type Props = {
    logUserIn: TEMP_any;
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
                <Header>Login</Header>
                <LoginForm onSubmit={handleSubmit} />
                {error && <div>{error}</div>}
            </div>
        </LoginPageContainer>
    );
};

type StateFromProps = {
    error?: string;
};

type DispatchFromProps = {
    logUserIn: TEMP_any;
};

const mapStateToProps = (state: ApplicationState) => ({
    error: state.user.error,
});

export default connect<StateFromProps, DispatchFromProps>(
    mapStateToProps,
    {
        logUserIn: logUserInAction,
    }
)(LoginIndex);
