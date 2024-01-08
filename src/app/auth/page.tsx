'use client';

import { ThemeContext } from '@/context/themeContext';
import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

const defaultFormData = {
	name: '',
	email: '',
	password: '',
};

export default function Auth() {
	const [formData, setFormData] = useState(defaultFormData);
	const { darkTheme, setDarkTheme } = useContext(ThemeContext);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			console.log(formData);
		} catch (error) {
			console.log(error);
		} finally {
			setFormData(defaultFormData);
		}
	};

	const inputStyle =
		'rounded-md border border-gray-700 p-2.5 text-center block w-full text-black dark:text-white dark:bg-gray-700';

	return (
		<section className='container mx-auto'>
			<div className='p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto'>
				<div className='flex flex-col mb-8 items-center justify-between'>
					<h1 className='text-xl font-bold leading-tight tracking-tight md:text-2xl'>
						Create an account
					</h1>

					<form
						className='flex flex-col justify-center space-y-4 md:space-y-6 mt-3'
						onSubmit={handleSubmit}
					>
						<input
							type='text'
							name='name'
							value={formData.name}
							placeholder='John Doe'
							pattern='[A-Za-z]{3,} [A-Za-z]{3,}'
							required
							className={inputStyle}
							onChange={handleInputChange}
						/>
						<input
							type='email'
							name='email'
							value={formData.email}
							placeholder='name@example.com'
							pattern='[a-z0-9.-]+@[a-z0-9.-]+\.[a-z]{2,}$'
							required
							className={inputStyle}
							onChange={handleInputChange}
						/>
						<input
							type='password'
							name='password'
							value={formData.password}
							placeholder='password'
							pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,16}'
							required
							className={inputStyle}
							onChange={handleInputChange}
						/>

						<button
							type='submit'
							className={`${
								darkTheme
									? 'bg-tertiary-light hover:bg-tertiary-dark'
									: 'bg-tertiary-dark hover:bg-tertiary-light'
							} text-[#1E1E1E] font-bold py-2.5 rounded-md w-full`}
						>
							Sign Up
						</button>
					</form>

					<p className='mt-6'>OR</p>

					<span className='inline-flex items-center mt-3'>
						<AiFillGithub className='mr-3 text-4xl scale-animation text-black dark:text-white cursor-pointer' />{' '}
						<FcGoogle className='text-4xl scale-animation cursor-pointer' />
					</span>

					<button
						className={`${
							darkTheme
								? 'text-tertiary-light hover:text-tertiary-dark'
								: 'text-tertiary-dark hover:text-tertiary-light'
						} mt-4`}
					>
						Login
					</button>
				</div>
			</div>
		</section>
	);
}
