import React from 'react';

type Props = {
    name: string;
    type?: 'text' | 'password';
    label?: string;
    placeholder?: string;
};

const Input: React.FunctionComponent<Props> = ({
    name,
    type = 'text',
    label = '',
    placeholder = '',
}) => (
    <div>
        {label && <label htmlFor={name}>{label}</label>}
        <input type={type} name={name} placeholder={placeholder} />
    </div>
);

export default Input;
