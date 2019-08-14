import React from 'react';
import Link from 'next/link';
import { Budget } from 'typings/interfaces';
import { Container } from './BudgetListStyles';

type Props = {
    items: Budget[];
};

const BudgetList: React.FunctionComponent<Props> = ({ items = [] }) => (
    <Container>
        <ul id="budget-list">
            {items.map(budget => (
                <li key={budget.id} className="budget">
                    <Link href={`/budget/${budget.slug}`}>
                        <a>{budget.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Container>
);

export default BudgetList;
