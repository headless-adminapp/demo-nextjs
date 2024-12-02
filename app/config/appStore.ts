import { ClientAppStore } from '@headless-adminapp/app/store';
import { PageType } from '@headless-adminapp/core/experience/app';

export const appStore = new ClientAppStore();

appStore.register({
  id: 'default',
  title: 'Demo Nextjs',
  logo: {
    image: '/vercel.svg',
  },
  navItems: [
    {
      label: 'Main Area',
      groups: [
        {
          label: 'Main menu',
          hideLabel: true,
          items: [
            {
              type: PageType.Custom,
              label: 'First page',
              link: '/first-page',
            },
          ],
        },
      ],
    },
  ],
});