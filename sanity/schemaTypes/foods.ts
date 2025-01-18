import { defineField, defineType } from 'sanity';

const food = defineType({
  name: 'food',
  title: 'Food',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Food Name',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Category of the food item (e.g., Burger, Sandwich, Drink, etc.)',
    }),
    defineField({
      name: 'price',
      title: 'Current Price',
      type: 'number',
    }),
    defineField({
      name: 'originalPrice',
      title: 'Original Price',
      type: 'number',
      description: 'Price before discount (if any)',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Tags for categorization (e.g., Best Seller, Popular, New)',
    }),
    defineField({
      name: 'image',
      title: 'Food Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Short description of the food item',
    }),
    defineField({
      name: 'available',
      title: 'Available',
      type: 'boolean',
      description: 'Availability status of the food item',
    }),
  ],
});

export default food;