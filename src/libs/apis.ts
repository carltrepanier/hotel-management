import { Room } from '@/models/room';

import sanityClient from './sanity';
import * as queries from './sanityQueries';

export async function getFeaturedRoom() {
	return await sanityClient.fetch<Room>(
		queries.getFeaturedRoomQuery,
		{},
		{ cache: 'no-cache' }
	);
}
