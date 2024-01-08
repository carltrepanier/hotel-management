import { defineField } from 'sanity';

export const account = {
	name: 'account',
	title: 'Account',
	type: 'document',
	fields: [
		defineField({
			name: 'providerType',
			type: 'string',
		}),
		defineField({
			name: 'providerId',
			type: 'string',
		}),
		defineField({
			name: 'providerAccountId',
			type: 'string',
		}),
		defineField({
			name: 'accessToken',
			type: 'string',
		}),
		defineField({
			name: 'accessTokenExpires',
			type: 'number',
		}),
		defineField({
			name: 'refreshToken',
			type: 'string',
		}),
		defineField({
			name: 'user',
			title: 'User',
			type: 'reference',
			to: { type: 'user' },
		}),
	],
};
