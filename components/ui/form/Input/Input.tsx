import React from 'react';

import useInputActiveState from '../useInputActiveState';

import { StyledInputField, Label } from './Input.styles';

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
}) => {
    const { active, handleFocus, handleBlur } = useInputActiveState();
    return (
        <div>
            {label && (
                <Label active={active} htmlFor={name} className="input-label">
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
                active={active}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </div>
    );
};

export default Input;
