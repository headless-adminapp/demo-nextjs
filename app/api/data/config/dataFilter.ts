import {
  DatabaseContext,
  ServerSdkContext,
  IDataFilter,
} from '@headless-adminapp/server-sdk';
import { SdkContext } from './types';
import { schemaStore } from './schemaStore';

export const dataFilter: IDataFilter<SdkContext, DatabaseContext> = {
  getOrganizationFilter: (params) => {
    const schema = schemaStore.getSchema(params.logicalName);

    if (schema.ownership === 'scoped') {
      return {
        type: 'and',
        conditions: [
          {
            operator: 'eq',
            field: 'ownerId',
            value: params.sdkContext.auth.userId,
          },
        ],
      };
    }

    return null;
  },
  getPermissionFilter: (params) => {
    return null;
  },
};
