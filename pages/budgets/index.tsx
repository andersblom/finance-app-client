import React, { Fragment } from 'react';
import Header from 'components/Header/Header';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

const BudgetsIndex: React.FunctionComponent = () => (
    <PrivateRoute>
        <Fragment>
            <Header />
            <div>budgets overview</div>
        </Fragment>
    </PrivateRoute>
);

export default BudgetsIndex;
