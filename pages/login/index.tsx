import React from 'react';

import LoginForm from 'components/LoginForm/LoginForm';

const LoginIndex: React.FunctionComponent = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.dir(e.target[0].value, e.target[1].value);
    };
    return (
        <div>
            <div>Login</div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
};

export default LoginIndex;
