import Input from '../Input';
import { shallow } from 'enzyme';

describe('Input', () => {
    const defaultProps = {
        name: 'test-input',
    };

    it('passes name prop to input element', () => {
        const wrapper = shallow(<Input {...defaultProps} name="my-input" />);
        expect(wrapper.find('#input-field-my-input').props().name).toBe(
            'my-input'
        );
    });

    it('renders a label element if a label prop is passed', () => {
        const wrapper = shallow(<Input {...defaultProps} />);
        expect(wrapper.find('.input-label').exists()).toBe(false);

        wrapper.setProps({
            label: 'email',
        });

        expect(wrapper.find('.input-label').exists()).toBe(true);
        expect(wrapper.find('.input-label').text()).toBe('email');
    });

    it('emits an event to the onChange prop', () => {
        const onChangeMock = jest.fn();
        const wrapper = shallow(
            <Input {...defaultProps} onChange={onChangeMock} />
        );

        wrapper.find('#input-field-test-input').simulate('change', {
            target: { value: 'test' },
        });

        expect(onChangeMock).toHaveBeenCalledWith({
            target: { value: 'test' },
        });
    });
});
