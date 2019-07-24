import App, { Container } from 'next/app';
import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import withReduxStore from 'lib/with-redux-store';
import { theme } from 'lib/styled-components';
import GlobalStyles from 'lib/globalStyles';

type Props = {
    reduxStore: any;
};

class MyApp extends App<Props> {
    render() {
        const { Component, pageProps, reduxStore } = this.props;
        return (
            <Container>
                <Provider store={reduxStore}>
                    <ThemeProvider theme={theme}>
                        <Fragment>
                            <GlobalStyles />
                            <Component {...pageProps} />
                        </Fragment>
                    </ThemeProvider>
                </Provider>
            </Container>
        );
    }
}

export default withReduxStore(MyApp);
