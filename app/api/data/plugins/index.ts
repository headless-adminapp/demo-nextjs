import {
  DatabaseContext,
  ExecutionStage,
  MessageName,
  PluginStore,
} from '@headless-adminapp/server-sdk';
import { SdkContext } from '../config/types';

export const pluginStore = new PluginStore<SdkContext, DatabaseContext>();

pluginStore.register({
  logicalName: '',
  messageName: MessageName.Create,
  stage: ExecutionStage.PreOperation,
  attributes: [],
  action: async (context) => {
    console.log(
      'This pre-operation plugin will run before create record for all entities'
    );
  },
});

pluginStore.register({
  logicalName: 'account',
  messageName: MessageName.Create,
  stage: ExecutionStage.PreOperation,
  attributes: [],
  action: async (context) => {
    console.log(
      'This pre-operation plugin will run before create record for account entity'
    );
  },
});
