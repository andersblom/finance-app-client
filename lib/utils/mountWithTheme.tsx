import { mount } from 'enzyme';
import { theme, ThemeConsumer } from 'lib/styled-components';

export const mountWithTheme = children => {
    /* tslint:disable */
    ThemeConsumer._currentValue = theme;
    /* tslint:enable */
    return mount(children);
};

export default mountWithTheme;
