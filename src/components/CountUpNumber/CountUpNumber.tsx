import { useEffect, useState } from 'react';

type Props = {
	endValue: number;
	duration: number;
};

export default function CountUpNumber({ endValue, duration }: Props) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let startTime: number;
		let animationFrameId: number;

		const updateCount = (currentTime: number) => {
			if (!startTime) {
				startTime = currentTime;
			}

			const progress = currentTime - startTime;

			if (progress < duration) {
				setCount(Math.min(endValue, (progress / duration) * endValue));
				animationFrameId = requestAnimationFrame(updateCount);
			} else {
				setCount(endValue);
			}
		};

		animationFrameId = requestAnimationFrame(updateCount);
		return () => cancelAnimationFrame(animationFrameId);
	}, [endValue, duration]);

	return (
		<p className='md:font-bolt font-medium text-lg md:text-2xl'>
			{Math.round(count)}
		</p>
	);
}
