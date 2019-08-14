import React from 'react';
import { mount } from 'enzyme';

import BudgetList from '../BudgetList';

describe('BudgetList', () => {
    const defaultProps = {};
    it('renders a list of N items', () => {
        const wrapper = mount(
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

        expect(wrapper.find('li.budget').length).toBe(2);
    });

    it('renders a link based on the slug', () => {
        const wrapper = mount(
            <BudgetList
                {...defaultProps}
                items={[{ id: 1, name: 'My budget', slug: 'my-budget' }]}
            />
        );

        expect(
            wrapper
                .find('li.budget')
                .find('a')
                .props().href
        ).toBe('/budget/my-budget');
    });
});
