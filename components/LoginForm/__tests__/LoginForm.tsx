import { mount } from 'enzyme';

import LoginForm from '../LoginForm';

describe('LoginForm', () => {
    const defaultProps = {
        onSubmit: () => {},
    };

    it('uses onSubmit when submitted', () => {
        const mockSubmit = jest.fn();
        const wrapper = mount(
            <LoginForm {...defaultProps} onSubmit={mockSubmit} />
        );

        wrapper
            .find('input#input-field-email')
            .simulate('change', { target: { value: 'anders@andersblom.dk' } });

        wrapper
            .find('input#input-field-password')
            .simulate('change', { target: { value: 'testing123' } });

        wrapper.find('input[type="submit"]').simulate('submit');

        expect(mockSubmit).toHaveBeenCalled();
    });
});
