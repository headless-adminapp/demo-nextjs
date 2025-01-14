import { HttpError } from '@headless-adminapp/core/transport';
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../utils/db-connect';
import { ExecuteParams, IServerSdk } from '@headless-adminapp/server-sdk';
import { MongoServerSdk } from '@headless-adminapp/server-sdk-mongo';
import { schemaStore } from './config/schemaStore';
import { SdkContext } from './config/types';
import { dataFilter } from './config/dataFilter';
import { pluginStore } from './plugins';

export async function POST(req: NextRequest) {
  try {
    // initilize db connection
    await dbConnect();

    const body = await req.json();

    // setup and configure sdk
    const sdk: IServerSdk = new MongoServerSdk<SdkContext>({
      schemaStore,
      dataFilter,
      pluginStore,
    });

    // execute sdk message
    const result = await sdk.execute(body as ExecuteParams);

    return NextResponse.json(result);
  } catch (error) {
    if (error instanceof HttpError) {
      return NextResponse.json(
        {
          error: error.message,
        },
        {
          status: error.status,
        }
      );
    } else {
      console.error(error);
      return NextResponse.json(
        {
          error: 'Internal Server Error',
        },
        {
          status: 500,
        }
      );
    }
  }
}
