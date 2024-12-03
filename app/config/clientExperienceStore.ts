import { SchemaExperienceStore } from '@headless-adminapp/app/store';

import { clientSchemaStore } from './clientSchemaStore';
import { userSchemaExperience } from './experience/user';

export const clientExperienceStore = new SchemaExperienceStore({
  schemaStore: clientSchemaStore,
});

clientExperienceStore.register(userSchemaExperience);
