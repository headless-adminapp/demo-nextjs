import { userSchema } from '@/app/config/schema/user';

import { MongoSchemaStore } from '@headless-adminapp/server-sdk-mongo';

export const schemaStore = new MongoSchemaStore();

schemaStore.register(userSchema);
