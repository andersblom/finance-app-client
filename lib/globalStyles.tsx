import { createGlobalStyle } from 'lib/styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700,900&display=swap');
    html, body, #__next {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        background-color: ${props => props.theme.color.background};
        font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
    }
`;

export default GlobalStyles;
