import React, { useState } from 'react';

import Input from 'components/ui/form/Input/Input';

import { LoginFormContainer } from './LoginForm.styles';

type Props = {
    onSubmit: (e: React.FormEvent) => Action;
};

const LoginForm: React.FunctionComponent<Props> = ({ onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value);
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setPassword(e.target.value);

    const isSubmitDisabled = email === '' || password === '';

    return (
        <LoginFormContainer className="login-form" onSubmit={onSubmit}>
            <div className="input-container">
                <Input
                    name="email"
                    label="Email"
                    placeholder="Please enter your email"
                    type="text"
                    onChange={handleEmailChange}
                    value={email}
                />
            </div>
            <div className="input-container">
                <Input
                    name="password"
                    label="Password"
                    type="password"
                    onChange={handlePasswordChange}
                    value={password}
                />
            </div>
            <input type="submit" value="Log in" disabled={isSubmitDisabled} />
        </LoginFormContainer>
    );
};

export default LoginForm;
