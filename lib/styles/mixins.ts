import { css } from 'lib/styled-components';

export const panelStyles = css`
    background-color: ${props => props.theme.color.panel};
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    padding: 20px;
`;

export const inputStyles = css`
    padding: 4px 8px;
    height: 40px;
    box-sizing: border-box;

    box-shadow: none;
    outline: none;
    border: 1px solid #dedede;
`;
