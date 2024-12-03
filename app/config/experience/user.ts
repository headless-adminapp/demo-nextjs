import { SchemaExperienceBuilder } from '@headless-adminapp/app/builders';
import { userSchema } from '../schema/user';

const builder = new SchemaExperienceBuilder(userSchema);

export const userSchemaExperience = builder.defineExperience({
  views: [
    {
      id: 'default',
      name: 'All users',
      experience: builder.defineViewExperience({
        grid: {
          columns: [
            {
              name: 'name',
            },
            {
              name: 'phone',
            },
            {
              name: 'email',
            },
            {
              name: 'status',
            },
          ],
        },
      }),
    },
    {
      id: 'default',
      name: 'Active users',
      experience: builder.defineViewExperience({
        grid: {
          columns: [
            {
              name: 'name',
            },
            {
              name: 'phone',
            },
            {
              name: 'email',
            },
            {
              name: 'status',
            },
          ],
        },
        filter: {
          type: 'and',
          conditions: [
            {
              field: 'status',
              operator: 'eq',
              value: 'active',
            },
          ],
        },
      }),
    },
  ],
});
