import { FC, PropsWithChildren } from 'react';

import Header from './Header';
import Providers from './providers';

export const metadata = {
    title: 'Rick and Morty',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Providers>
                    <Header />
                    {children}
                </Providers>
            </body>
        </html>
    );
};

export default RootLayout;
