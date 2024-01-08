import { defineField } from 'sanity';

export const verificationToken = {
	name: 'verificationToken',
	title: 'Verification Token',
	type: 'document',
	fields: [
		defineField({
			name: 'identifier',
			title: 'Identifier',
			type: 'string',
		}),
		defineField({
			name: 'token',
			title: 'Token',
			type: 'string',
		}),
		defineField({
			name: 'expiresAt',
			title: 'Expires At',
			type: 'datetime',
		}),
	],
};
