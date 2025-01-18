import { defineField, defineType } from 'sanity';

const chef = defineType({
  name: 'chef',
  title: 'Chef',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Chef Name',
      type: 'string',
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      description: 'Role or title of the chef (e.g., Head Chef, Sous Chef)',
    }),
    defineField({
      name: 'experience',
      title: 'Years of Experience',
      type: 'number',
      description: 'Number of years the chef has worked in the culinary field',
    }),
    defineField({
      name: 'specialty',
      title: 'Specialty',
      type: 'string',
      description: 'Specialization of the chef (e.g., Italian Cuisine, Pastry)',
    }),
    defineField({
      name: 'image',
      title: 'Chef Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Short bio or introduction about the chef',
    }),
    defineField({
      name: 'available',
      title: 'Currently Active',
      type: 'boolean',
      description: 'Availability status of the chef',
    }),
  ],
});

export default chef