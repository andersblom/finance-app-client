import { createGlobalStyle } from 'lib/styled-components';

const GlobalStyles = createGlobalStyle`
    html, body, #__next {
        margin: 0;
        padding 0;
        height: 100%;
        width: 100%;
        background-color: ${props => props.theme.color.background};
    }
`;

export default GlobalStyles;
