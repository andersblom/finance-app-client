// tslint:disable:no-duplicate-imports
import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

export const theme = {
    color: {
        main: 'blue',
    },
};

export type Theme = typeof theme;

const {
    default: styled,
    css,
    createGlobalStyle,
    ThemeProvider,
    ThemeConsumer,
    keyframes,
} = (styledComponents as any) as ThemedStyledComponentsModule<Theme>;

export { css, createGlobalStyle, keyframes, ThemeProvider, ThemeConsumer };
export default styled;
