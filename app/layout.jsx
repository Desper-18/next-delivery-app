import Navbar from './components/navbar/Navbar';
import './globals.css';
import { Raleway } from 'next/font/google';
import localFont from 'next/font/local';

const raleway = Raleway({ subsets: ['latin'] });
const museoSansCyrl = localFont({
    src: [
        {
            path: './assets/fonts/MuseoSansCyrl300.woff',
            weight: '300',
            style: 'normal',
        },
        {
            path: './assets/fonts/MuseoSansCyrl500.woff',
            weight: '500',
            style: 'normal',
        },
        {
            path: './assets/fonts/MuseoSansCyrl700.woff',
            weight: '700',
            style: 'normal',
        },
        {
            path: './assets/fonts/MuseoSansCyrl900.woff',
            weight: '900',
            style: 'normal',
        },
    ],
    variable: '--museo-sans',
});

export const metadata = {
    title: 'CONVEX | Доставка еды',
    description: 'Доставляем с радостью, быстро!',
    icons: {
        icon: '/favicons/favicon.ico',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicons/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicons/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicons/favicon-16x16.png"
                />
                {/* <link rel="manifest" href="/favicons/site.webmanifest" /> */}
                <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
            </head>
            <body className={museoSansCyrl.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
