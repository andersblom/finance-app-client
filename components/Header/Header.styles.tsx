import styled from 'lib/styled-components';

export const HeaderContainer = styled.div`
    background: white;
    border-bottom: 1px solid #dedede;
    padding: 15px 25px;

    display: flex;
    justify-content: space-between;

    .navigation {
        list-style-type: none;
        display: flex;
        margin: 0;
    }

    .navigation-item {
        margin-right: 10px;
        &:last-of-type {
            margin-right: 0;
        }
    }
`;
