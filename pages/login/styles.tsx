import styled from 'lib/styled-components';

export const LoginPageContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .login-form-panel {
        background-color: ${props => props.theme.color.panel};
        max-width: 320px;
        width: 90%;
    }
`;
