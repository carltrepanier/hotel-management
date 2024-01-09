'use client';

import CountUpNumber from '../CountUpNumber/CountUpNumber';

type Props = {
	component1: React.ReactNode;
	component2: React.ReactNode;
};

export default function ClientComponent({ component1, component2 }: Props) {
	return (
		<section className='flex px-4 items-center gap-12 container mx-auto'>
			<div className='py-10 h-full'>
				{component1}

				<div className='flex justify-between mt-12'>
					<div className='flex flex-col gap-3 items-center justify-center'>
						<p className='text-md md:text-xl text-center'>Basic Room</p>
						<CountUpNumber endValue={100} duration={5000} />
					</div>
					<div className='flex flex-col gap-3 items-center justify-center'>
						<p className='text-md md:text-xl text-center'>Luxury Room</p>
						<CountUpNumber endValue={60} duration={5000} />
					</div>
					<div className='flex flex-col gap-3 items-center justify-center'>
						<p className='text-md md:text-xl text-center'>Suite</p>
						<CountUpNumber endValue={20} duration={5000} />
					</div>
				</div>
			</div>

			{component2}
		</section>
	);
}
