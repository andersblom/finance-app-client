import { mount } from 'enzyme';

import LoginForm from '../LoginForm';

describe('LoginForm', () => {
    const defaultProps = {
        onSubmit: () => {},
    };

    it('triggers the onSubmit prop when submit button is clicked', () => {
        const mockSubmit = jest.fn();
        const wrapper = mount(
            <LoginForm {...defaultProps} onSubmit={mockSubmit} />
        );

        wrapper.find('input[type="submit"]').simulate('submit');

        expect(mockSubmit).toHaveBeenCalled();
    });
});
