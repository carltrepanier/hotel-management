'use client';

import { ThemeContext } from '@/context/themeContext';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useContext } from 'react';

type Props = {
	roomTypeFilter: string;
	searchQuery: string;
	setRoomTypeFilter: (value: string) => void;
	setSearchQuery: (value: string) => void;
};

export default function Search({
	roomTypeFilter,
	searchQuery,
	setRoomTypeFilter,
	setSearchQuery,
}: Props) {
	const { darkTheme, setDarkTheme } = useContext(ThemeContext);
	const router = useRouter();

	const handleRoomTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setRoomTypeFilter(e.target.value);
	};

	const handleSearchQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);
	};

	const handleFilterClick = () => {
		router.push(`/rooms?roomType=${roomTypeFilter}&searchQuery=${searchQuery}`);
	};

	return (
		<section
			className={`${
				darkTheme ? 'bg-tertiary-light' : 'bg-tertiary-dark'
			} px-4 py-6 rounded-lg`}
		>
			<div className='container mx-auto flex flex-wrap gap-4 justify-between items-center'>
				<div className='w-full md:1/3 lg:w-auto mb-4 md:mb-0'>
					<label className='block text-sm text-[#1E1E1E] font-medium mb-2'>
						Room Type
					</label>

					<div className='relative'>
						<select
							value={roomTypeFilter}
							onChange={handleRoomTypeChange}
							className='w-full px-4 py-2 lg:mb-4 capitalize rounded leading-tight dark:bg-black focus:outline-none'
						>
							<option value='All'>All</option>
							<option value='Basic'>Basic</option>
							<option value='Luxury'>Luxury</option>
							<option value='Suite'>Suite</option>
						</select>
					</div>
				</div>

				<div className='w-full md:1/3 lg:w-auto mb-4 md:md-0'>
					<label className='block text-sm text-[#1E1E1E] font-medium mb-2'>
						Search
					</label>

					<input
						type='search'
						id='search'
						value={searchQuery}
						onChange={handleSearchQueryChange}
						placeholder='Search...'
						className='w-full px-4 py-3 rounded leading-tight dark:bg-black focus:outline-none placeholder:text-black dark:placeholder:text-white'
					/>
				</div>

				<button
					type='button'
					onClick={handleFilterClick}
					className='btn-primary'
				>
					Search
				</button>
			</div>
		</section>
	);
}
