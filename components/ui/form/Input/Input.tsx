import React from 'react';

import { InputContainer, StyledInputField, Label } from './Input.styles';

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
    <InputContainer>
        {label && (
            <Label htmlFor={name} className="input-label">
                {label}
            </Label>
        )}
        <StyledInputField
            id={`input-field-${name}`}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    </InputContainer>
);

export default Input;
