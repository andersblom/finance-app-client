import React from 'react';
import { mount } from 'enzyme';

import BudgetList from '../BudgetList';

describe('BudgetList', () => {
    const defaultProps = {};
    it('renders a list of N items', () => {
        const wrapper = mount(
            <BudgetList
                items={[{ id: 1, name: 'My budget', slug: 'my-budget' }]}
            />
        );

        expect(wrapper.exists()).toBe(true);
    });
});
