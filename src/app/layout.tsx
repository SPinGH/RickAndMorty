import { FC, PropsWithChildren } from 'react';

import Providers from './providers';

export const metadata = {
    title: 'Rick and Morty',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
};

export default RootLayout;
