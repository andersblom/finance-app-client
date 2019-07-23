import React from 'react';

type Props = {
    name: string;
    type?: 'text' | 'password';
    label?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
};

const Input: React.FunctionComponent<Props> = ({
    name,
    type = 'text',
    label = '',
    placeholder = '',
    onChange,
    value,
}) => (
    <div>
        {label && <label htmlFor={name}>{label}</label>}
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    </div>
);

export default Input;
