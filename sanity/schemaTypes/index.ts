import { type SchemaTypeDefinition } from 'sanity';
import chef from './chefs';
import food from './foods';
import product from './products';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [food, chef, product],
};
