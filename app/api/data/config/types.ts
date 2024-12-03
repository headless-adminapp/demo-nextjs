import { ServerSdkContext } from '@headless-adminapp/server-sdk';

export interface SdkContext extends ServerSdkContext {
  auth: {
    userId: string;
  };
}
