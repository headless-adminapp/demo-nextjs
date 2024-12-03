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
  forms: [
    {
      id: 'default',
      name: 'Default',
      experience: builder.defineFormExperience({
        headerControls: ['status'],
        tabs: [
          {
            name: 'general',
            label: 'General',
            columnCount: 2,
            tabColumns: [
              {
                sections: [
                  {
                    name: 'user-details',
                    label: 'User details',
                    controls: [
                      {
                        type: 'standard',
                        attributeName: 'name',
                      },
                    ],
                  },
                  {
                    name: 'contact-details',
                    label: 'Contact details',
                    columnCount: 2,
                    controls: [
                      {
                        type: 'standard',
                        attributeName: 'phone',
                      },
                      {
                        type: 'standard',
                        attributeName: 'email',
                      },
                    ],
                  },
                ],
              },
              {
                sections: [
                  {
                    name: 'other-details',
                    label: 'Other details',
                    controls: [
                      {
                        type: 'standard',
                        attributeName: 'age',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      }),
    },
  ],
});
