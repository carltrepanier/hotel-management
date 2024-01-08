'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/context/themeContext';
import { FaUserCircle } from 'react-icons/fa';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { useSession } from 'next-auth/react';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
	const { darkTheme, setDarkTheme } = useContext(ThemeContext);
	const { data: session } = useSession();

	return (
		<header className='py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between'>
			<div className='flex items-center w-full md:2/3'>
				<Link
					href='/'
					className={`${
						darkTheme ? 'text-tertiary-light' : 'text-tertiary-dark'
					} 'font-black'`}
				>
					Hotelzzz
				</Link>

				<ul className='flex items-center ml-5'>
					<li className='flex items-center'>
						{session?.user ? (
							<Link href={`/users/${session.user.id}`}>
								{session.user.image ? (
									<div className='w-10 h-10 rounded-full overflow-hidden'>
										<Image
											src={session.user.image}
											alt={session.user.name!}
											width={40}
											height={40}
											className='img scale-animation'
										/>
									</div>
								) : (
									<FaUserCircle className='cursor-pointer' />
								)}
							</Link>
						) : (
							<Link href='/auth'>
								<FaUserCircle className='cursor-pointer' />
							</Link>
						)}
					</li>

					<li>
						{darkTheme ? (
							<MdOutlineLightMode
								className='ml-3 cursor-pointer'
								onClick={() => {
									setDarkTheme(false);
									localStorage.removeItem('hotel-theme');
								}}
							/>
						) : (
							<MdDarkMode
								className='ml-3 cursor-pointer'
								onClick={() => {
									setDarkTheme(true);
									localStorage.setItem('hotel-theme', 'true');
								}}
							/>
						)}
					</li>
				</ul>
			</div>

			{/* À revoir */}
			<ul className='flex items-center justify-between w-full md:w-1/3 mt-4'>
				<li
					className={`${
						darkTheme ? 'hover:text-tertiary-light' : 'hover:text-tertiary-dark'
					} hover:-translate-y-2 duration-500 transition-all`}
				>
					<Link href='/'>Home</Link>
				</li>

				<li
					className={`${
						darkTheme ? 'hover:text-tertiary-light' : 'hover:text-tertiary-dark'
					} hover:-translate-y-2 duration-500 transition-all`}
				>
					<Link href='/rooms'>Rooms</Link>
				</li>

				<li
					className={`${
						darkTheme ? 'hover:text-tertiary-light' : 'hover:text-tertiary-dark'
					} hover:-translate-y-2 duration-500 transition-all`}
				>
					<Link href='/contact'>Contact</Link>
				</li>
			</ul>
		</header>
	);
}
