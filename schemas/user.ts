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
			name: 'avatar',
			title: 'Avatar',
			type: 'image',
			description: 'Avatar of the user',
			readOnly: true,
		}),
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			description: 'Name of the user',
			validation: (Rule) => Rule.required(),
			readOnly: true,
		}),
		defineField({
			name: 'email',
			title: 'Email',
			type: 'string',
			description: 'Email of the user',
			validation: (Rule) => Rule.required(),
			readOnly: true,
		}),
		defineField({
			name: 'password',
			title: 'Password',
			type: 'string',
			validation: (Rule) => Rule.required(),
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
