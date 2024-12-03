import { InferredSchemaType } from '@headless-adminapp/core/schema';
import { defineSchema } from '@headless-adminapp/core/schema/utils';

export const userSchema = defineSchema({
  logicalName: 'users',
  label: 'User',
  pluralLabel: 'Users',
  idAttribute: '_id',
  primaryAttribute: 'name',
  attributes: {
    _id: {
      type: 'id',
      label: 'Id',
      required: true,
      readonly: true,
      string: true,
    },
    name: {
      type: 'string',
      format: 'text',
      label: 'Name',
    },
  },
});

export type UserAttributes = (typeof userSchema)['attributes'];

export type User = InferredSchemaType<UserAttributes>;
