import { getFeaturedRoom } from '@/libs/apis';

import FeaturedRoom from '@/components/FeaturedRoom/FeaturedRoom';
import Gallery from '@/components/Gallery/Gallery';
import Hero from '@/components/HeroSection/Hero';
import NewsLetter from '@/components/NewsLetter/NewsLetter';
import PageSearch from '@/components/PageSearch/PageSearch';

export default async function Home() {
	const featuredRoom = await getFeaturedRoom();

	return (
		<>
			<Hero />
			<PageSearch />
			<FeaturedRoom featuredRoom={featuredRoom} />
			<Gallery />
			<NewsLetter />
		</>
	);
}
