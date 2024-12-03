import { IDataService } from '@headless-adminapp/core/transport';

export const dataService: IDataService = {
  retriveRecords: async (query) => {
    return {
      logicalName: 'users',
      count: 10,
      records: [
        {
          _id: 1,
          name: 'John Doe',
        },
      ],
    };
  },
} as IDataService;
