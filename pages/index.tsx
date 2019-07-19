import * as React from 'react';
import Link from 'next/link';

const Index: React.FunctionComponent = () => (
    <div>
        <div>Welcome</div>
        <div>
            <Link href="/login">
                <a>Login</a>
            </Link>
            <Link href="/register">
                <a>Register</a>
            </Link>
        </div>
    </div>
);

export default Index;
