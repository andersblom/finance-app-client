import styled from 'lib/styled-components';
import { panelStyles } from 'lib/styles/mixins';
import { HeaderOne } from 'lib/styles/typography';

export const LoginPageContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .login-form-panel {
        max-width: 320px;
        width: 90%;
        ${panelStyles}
    }
`;

export const Header = styled(HeaderOne)`
    color: black;
    text-align: center;
`;
