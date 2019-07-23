import App, {Container} from 'next/app';
import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import withReduxStore from 'lib/with-redux-store';

import {theme} from 'lib/styled-components';

class MyApp extends App {
  render () {
    const {Component, pageProps, reduxStore} = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore (MyApp);
