import React from 'react';

import Input from 'components/form/Input/Input';

const LoginIndex: React.FunctionComponent = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.dir(e.target[0].value, e.target[1].value);
    };
    return (
        <div>
            <div>Login</div>
            <form onSubmit={handleSubmit}>
                <Input
                    name="email"
                    label="Email"
                    placeholder="Please enter your email"
                    type="text"
                />
                <Input name="password" label="Password" type="password" />
                <input type="submit" value="Log in" />
            </form>
        </div>
    );
};

export default LoginIndex;
