import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';

import { getAllBudgets as getAllBudgetsAction } from 'actions/budgets';
import Header from 'components/Header/Header';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import { ApplicationState, Budget } from 'typings/interfaces';

type Props = {
    getAllBudgets: TEMP_any;
    budgets: Budget[];
};

const BudgetsIndex: React.FunctionComponent<Props> = ({
    getAllBudgets,
    budgets = [],
}) => {
    useEffect(() => {
        getAllBudgets();
    }, []);
    return (
        <PrivateRoute>
            <Fragment>
                <Header />
                {budgets.length ? (
                    <div>budgets</div>
                ) : (
                    <div>No budgets available :(</div>
                )}
                <button>Add budget</button>
            </Fragment>
        </PrivateRoute>
    );
};

type StateFromProps = {
    budgets: Budget[];
};

type DispatchFromProps = {
    getAllBudgets: TEMP_any;
};

const mapStateToProps = (state: ApplicationState) => ({
    budgets: state.budgets.all,
});

export default connect<StateFromProps, DispatchFromProps>(
    mapStateToProps,
    { getAllBudgets: getAllBudgetsAction }
)(BudgetsIndex);
