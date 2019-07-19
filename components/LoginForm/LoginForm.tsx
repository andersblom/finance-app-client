import React from 'react';

import Input from 'components/form/Input/Input';

type Props = {
    onSubmit: (e: React.FormEvent) => void;
};

const LoginForm: React.FunctionComponent<Props> = ({ onSubmit }) => (
    <form onSubmit={onSubmit}>
        <Input
            name="email"
            label="Email"
            placeholder="Please enter your email"
            type="text"
        />
        <Input name="password" label="Password" type="password" />
        <input type="submit" value="Log in" />
    </form>
);

export default LoginForm;
