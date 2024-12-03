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
          email: 'john.doe@example.com',
          phone: '123-456-7890',
          age: 30,
          status: 'active',
        },
      ],
    };
  },
  retriveRecord: async (logicalName, id) => {
    return {
      _id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      age: 30,
      status: 'active',
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
