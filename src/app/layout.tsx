import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ThemeProvider from '@/components/ThemeProvider/ThemeProvider';
import NextAuthProvider from '@/components/AuthProvider/AuthProvider';

import './globals.css';
import Toast from '@/components/Toast/Toast';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '700', '900'],
	style: ['italic', 'normal'],
	variable: '--font-poppins',
});

export const metadata: Metadata = {
	title: 'Hotel Management App',
	description: 'Discover and book the best hotels in the world.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<NextAuthProvider>
					<ThemeProvider>
						<Toast />
						<main className='font-normal'>
							<Navbar />
							{children}
							<Footer />
						</main>
					</ThemeProvider>
				</NextAuthProvider>
			</body>
		</html>
	);
}
