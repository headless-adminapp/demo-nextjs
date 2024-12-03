'use client';

import { PageEntityView } from '@headless-adminapp/fluent/PageEntityView';

export default function Page(props: { params: { logicalName: string } }) {
  return <PageEntityView logicalName={props.params.logicalName} />;
}
