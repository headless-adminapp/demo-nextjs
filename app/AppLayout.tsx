'use client';

import '@headless-adminapp/app/index.css';
import '@headless-adminapp/fluent/styles.css';
import 'react-quill/dist/quill.snow.css';
import { LayoutProvider } from '@headless-adminapp/fluent/App/LayoutProvider';
import { App } from '@headless-adminapp/fluent/App';
import { registerIconSet } from '@headless-adminapp/icons/register';
import { iconSet } from '@headless-adminapp/icons-fluent';
import { PropsWithChildren } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

registerIconSet(iconSet);

export default function AppLayout({ children }: PropsWithChildren) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <LayoutProvider
      routeProps={{
        router: router,
        pathname: pathname,
        searchParams: searchParams,
      }}
    >
      <App appId="default">{children}</App>
    </LayoutProvider>
  );
}
