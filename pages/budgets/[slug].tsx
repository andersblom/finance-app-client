import React, { Component, Fragment } from 'react';

import Header from 'components/Header/Header';
import { Budget } from 'typings/interfaces';

type Props = {
    query: {
        slug: string;
    };
};

class BudgetBySlug extends Component<Props> {
    static getInitialProps({ query }) {
        return { query };
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Fragment>
                    <Header />
                    <div>{this.props.query.slug}</div>
                </Fragment>
            </div>
        );
    }
}

export default BudgetBySlug;
