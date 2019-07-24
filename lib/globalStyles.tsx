import { createGlobalStyle } from 'lib/styled-components';

const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding 0;
        background-color: ${props => props.theme.color.background};
    }
`;

export default GlobalStyles;
