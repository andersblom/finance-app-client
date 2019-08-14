import React from 'react';

import mountWithTheme from 'lib/utils/mountWithTheme';

import BudgetList from '../BudgetList';

describe('BudgetList', () => {
    const defaultProps = {};
    it('renders a list of N items', () => {
        const wrapper = mountWithTheme(
            <BudgetList
                {...defaultProps}
                items={[
                    { id: 1, name: 'My budget', slug: 'my-budget' },
                    {
                        id: 2,
                        name: 'My second budget',
                        slug: 'my-second-budget',
                    },
                ]}
            />
        );

        expect(wrapper.find('li.budget-item').length).toBe(2);
    });

    it('renders a link based on the slug', () => {
        const wrapper = mountWithTheme(
            <BudgetList
                {...defaultProps}
                items={[{ id: 1, name: 'My budget', slug: 'my-budget' }]}
            />
        );

        expect(
            wrapper
                .find('li.budget-item')
                .find('a')
                .props().href
        ).toBe('/budgets/my-budget');
    });
});
