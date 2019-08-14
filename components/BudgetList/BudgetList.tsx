import React from 'react';
import { Budget } from 'typings/interfaces';
import { Container } from './BudgetListStyles';

type Props = {
    items: Budget[];
};

const BudgetList: React.FunctionComponent<Props> = ({ items }) => (
    <Container>budgets</Container>
);

export default BudgetList;
