import { defineField } from 'sanity';

export const user = {
	name: 'user',
	title: 'User',
	type: 'document',
	fields: [
		defineField({
			name: 'isAdmin',
			title: 'Is Admin',
			type: 'boolean',
			description: 'Check if the user is admin',
			initialValue: false,
			validation: (Rule) => Rule.required(),
			// readOnly: true,
			// hidden: true,
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'url',
		}),
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			description: 'Name of the user',
			readOnly: true,
		}),
		defineField({
			name: 'email',
			title: 'Email',
			type: 'string',
			description: 'Email of the user',
			readOnly: true,
		}),
		defineField({
			name: 'emailVerified',
			type: 'datetime',
			hidden: true,
		}),
		defineField({
			name: 'password',
			title: 'Password',
			type: 'string',
			hidden: true,
		}),
		defineField({
			name: 'about',
			title: 'About',
			type: 'text',
			description: 'A brief description about the user',
		}),
	],
};
