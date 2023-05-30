import { FC, PropsWithChildren } from 'react';

export const metadata = {
    title: 'Rick and Morty',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
