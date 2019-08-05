import React from 'react';
import Link from 'next/link';

import { HeaderContainer } from './Header.styles';

const Header: React.FunctionComponent = () => {
    return (
        <HeaderContainer>
            <div>logo</div>
            <ul className="navigation">
                <li className="navigation-item dashboard">
                    <Link href="/dashboard">
                        <a>Dashboard</a>
                    </Link>
                </li>
                <li className="navigation-item budgets">
                    <Link href="/budgets">
                        <a>Budgets</a>
                    </Link>
                </li>
                <li className="navigation-item account">
                    <Link href="/account">
                        <a>Account</a>
                    </Link>
                </li>
            </ul>
        </HeaderContainer>
    );
};

export default Header;
