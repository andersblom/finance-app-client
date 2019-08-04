import React from 'react';
import Link from 'next/link';

import { HeaderContainer } from './Header.styles';

const Header: React.FunctionComponent = () => {
    return (
        <HeaderContainer>
            <div>logo</div>
            <ul className="navigation">
                <li className="navigation-item">
                    <Link href="dashboard">
                        <a>Dashboard</a>
                    </Link>
                </li>
                <li className="navigation-item">
                    <Link href="budgets">
                        <a>Budgets</a>
                    </Link>
                </li>
                <li className="navigation-item">
                    <Link href="budgets">
                        <a>Account</a>
                    </Link>
                </li>
            </ul>
        </HeaderContainer>
    );
};

export default Header;
