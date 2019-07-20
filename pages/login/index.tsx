import React from 'react';
import axios from 'axios';

import LoginForm from 'components/LoginForm/LoginForm';

const LoginIndex: React.FunctionComponent = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        axios
            .post('http://finance-app-api.test/api/login', {
                email: e.target[0].value,
                password: e.target[1].value,
            })
            .then(res => console.log(res));
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
