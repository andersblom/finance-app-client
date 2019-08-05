import App, { Container } from 'next/app';
import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import jsHttpCookie from 'cookie';

import withReduxStore from 'lib/with-redux-store';
import { theme } from 'lib/styled-components';
import GlobalStyles from 'lib/globalStyles';
import { getUserFromToken } from 'actions/user';

const COOKIE_TOKEN_KEY = 'finance_app_auth_key';

const getTokenFromRequest = (req: TEMP_any) => {
    if (req && req.headers) {
        const cookies = req.headers.cookie;

        if (typeof cookies === 'string') {
            const cookiesJSON = jsHttpCookie.parse(cookies);

            return cookiesJSON[COOKIE_TOKEN_KEY];
        }
    }
};

type Props = {
    reduxStore: TEMP_any;
    token?: string;
};

class MyApp extends App<Props> {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return {
            pageProps,
            token: getTokenFromRequest(ctx.req),
        };
    }

    componentDidMount() {
        const { token, reduxStore } = this.props;
        if (token) {
            reduxStore.dispatch(getUserFromToken(token));
        }
    }

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
