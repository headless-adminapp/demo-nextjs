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
    phone: {
      type: 'string',
      format: 'phone',
      label: 'Phone',
    },
    email: {
      type: 'string',
      format: 'email',
      label: 'Email',
    },
    age: {
      type: 'number',
      format: 'integer',
      label: 'Age',
    },
    status: {
      type: 'choice',
      label: 'Status',
      string: true,
      options: [
        { value: 'active', label: 'Active' },
        { value: 'inactive', label: 'Inactive' },
      ],
    },
  },
});

export type UserAttributes = (typeof userSchema)['attributes'];

export type User = InferredSchemaType<UserAttributes>;
