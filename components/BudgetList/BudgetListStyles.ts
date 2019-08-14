import styled from 'lib/styled-components';

export const Container = styled.div`
    #budget-list {
        list-style-type: none;
        margin: 0 0 20px 0;
        padding: 0;
    }

    .budget-item {
        padding: 10px;
        background-color: ${props => props.theme.color.panel};
        &:not(:last-of-type) {
            margin-bottom: 20px;
        }
    }
`;
