import { mount } from 'enzyme';

import LoginForm from '../LoginForm';

describe('LoginForm', () => {
    const defaultProps = {
        onSubmit: () => {},
    };

    it('disables the submit button until email and password is filled out', () => {
        const mockSubmit = jest.fn();
        const wrapper = mount(
            <LoginForm {...defaultProps} onSubmit={mockSubmit} />
        );

        expect(wrapper.find('input[type="submit"]').props().disabled).toBe(
            true
        );

        wrapper
            .find('input[name="email"]')
            .simulate('change', { target: { value: 'anders@andersblom.dk' } });

        wrapper
            .find('input[name="password"]')
            .simulate('change', { target: { value: 'testing123' } });

        expect(wrapper.find('input[type="submit"]').props().disabled).toBe(
            false
        );

        wrapper.find('input[type="submit"]').simulate('submit');

        expect(mockSubmit).toHaveBeenCalled();
    });
});
