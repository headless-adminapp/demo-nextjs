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
  retriveRecord: async (logicalName, id) => {
    return {
      _id: 1,
      name: 'John Doe',
    };
  },
  createRecord: async (logicalName, data) => {
    return {
      id: '1',
      logicalName,
    };
  },
  customAction: async (actionName, payload) => {
    return payload;
  },
  deleteRecord: async (logicalName, id) => {
    return;
  },
  retriveAggregate: async (query) => {
    return [];
  },
  updateRecord: async (logicalName, id, data) => {
    return {
      id,
      logicalName,
    };
  },
} as IDataService;
