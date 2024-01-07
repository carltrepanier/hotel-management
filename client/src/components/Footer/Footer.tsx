'use client';

import Link from 'next/link';
import { BsFillSendFill, BsTelephoneOutbound } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';
import { ThemeContext } from '@/context/themeContext';
import { useContext } from 'react';

export default function Footer() {
	const { darkTheme, setDarkTheme } = useContext(ThemeContext);

	return (
		<footer className='flex flex-col text-center mt-16'>
			<div className='container mx-auto px-4'>
				<Link
					href='/'
					className={`${
						darkTheme ? 'text-tertiary-light' : 'text-tertiary-dark'
					} 'font-black'`}
				>
					Hotelzzz
				</Link>

				<h4 className='font-semibold text-[40px] py-6'>Contact</h4>

				<div className='flex flex-col flex-wrap md:flex-row gap-16 items-center justify-between text-center'>
					<div className='flex-1'>
						<div className='flex justify-center'>
							<p className='ml-2'>123 Road</p>
						</div>

						<div className='flex items-center justify-center py-4'>
							<BsFillSendFill />
							<p className='ml-2'>Carl Trépanier</p>
						</div>

						<div className='flex items-center justify-center'>
							<BsTelephoneOutbound />
							<p className='ml-2'>123-456-7890</p>
						</div>

						<div className='flex items-center justify-center pt-4'>
							<BiMessageDetail />
							<p className='ml-2'>Carl Trépanier</p>
						</div>
					</div>

					<div className='flex-1'>
						<p className='pb-4'>Our Story</p>
						<p className='pb-4'>Get in Touch</p>
						<p className='pb-4'>Our Privacy Commitment</p>
						<p className='pb-4'>Terms of Service</p>
						<p>Customer Assistance</p>
					</div>

					<div className='flex-1'>
						<p className='pb-4'>Dining Experience</p>
						<p className='pb-4'>Wellness</p>
						<p className='pb-4'>Fitness</p>
						<p className='pb-4'>Sports</p>
						<p>Events</p>
					</div>
				</div>
			</div>

			<div
				className={`${
					darkTheme ? 'bg-tertiary-light' : 'bg-tertiary-dark'
				} h-10 md:h-[70px] mt-16 w-full bottom-0 left-0`}
			/>
		</footer>
	);
}
