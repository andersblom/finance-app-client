import Input from '../Input';
import { shallow } from 'enzyme';

describe('Input', () => {
    const defaultProps = {
        name: 'test-input',
    };

    it('passes name prop to input element', () => {
        const wrapper = shallow(<Input {...defaultProps} name="my-input" />);
        expect(wrapper.find('input[name="my-input"]').exists()).toBe(true);
    });

    it('renders a label element if a label prop is passed', () => {
        const wrapper = shallow(<Input {...defaultProps} />);
        expect(wrapper.find('label').exists()).toBe(false);

        wrapper.setProps({
            label: 'email',
        });

        expect(wrapper.find('label').exists()).toBe(true);
        expect(wrapper.find('label').text()).toBe('email');
    });

    it('emits an event to the onChange prop', () => {
        const onChangeMock = jest.fn();
        const wrapper = shallow(
            <Input {...defaultProps} onChange={onChangeMock} />
        );

        wrapper.find('input').simulate('change', {
            target: { value: 'test' },
        });

        expect(onChangeMock).toHaveBeenCalledWith({
            target: { value: 'test' },
        });
    });
});
