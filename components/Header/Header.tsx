import React from 'react';
import Link from 'next/link';

const Header: React.FunctionComponent = () => {
    return (
        <div>
            <div>logo</div>
            <div>
                <Link href="dashboard">
                    <a>Dashboard</a>
                </Link>
                <Link href="budgets">
                    <a>Budgets</a>
                </Link>
            </div>
        </div>
    );
};

export default Header;
