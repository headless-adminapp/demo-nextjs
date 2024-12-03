import { HttpError } from '@headless-adminapp/core/transport';
import { NextResponse } from 'next/server';

export function formatError(error: unknown) {
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
