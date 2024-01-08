import { defineField } from 'sanity';

export const review = {
	name: 'review',
	title: 'Review',
	type: 'document',
	fields: [
		defineField({
			name: 'user',
			title: 'User',
			type: 'reference',
			to: [{ type: 'user' }],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'hotelRoom',
			title: 'Hotel Room',
			type: 'reference',
			to: [{ type: 'hotelRoom' }],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'useRating',
			title: 'User Rating',
			type: 'number',
			validation: (Rule) =>
				Rule.required().min(1).max(5).error('Rating must be between 1 and 5'),
		}),
		defineField({
			name: 'comment',
			title: 'Comment',
			type: 'text',
			validation: (Rule) => Rule.required(),
		}),
	],
};
