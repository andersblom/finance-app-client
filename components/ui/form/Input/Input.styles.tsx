import styled, { css } from 'lib/styled-components';

import { FormLabel } from 'lib/styles/typography';
import { inputStyles } from 'lib/styles/mixins';

type InputProps = {
    active: boolean;
};

export const StyledInputField = styled.input<InputProps>`
    ${inputStyles}
    width: 100%;

    transition: 200ms border-color ease;

    ${props =>
        props.active &&
        css`
            border-color: black;
        `}
`;

type LabelProps = {
    active: boolean;
};

export const Label = styled(FormLabel)<LabelProps>`
    display: block;
    margin-bottom: 4px;
    transition: 200ms color ease;

    ${props =>
        props.active &&
        css`
            color: ${props.theme.color.main};
        `}
`;
