import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting started',
      collapsed: false,
      items: [
        'getting-started/what-is-ameide',
        'getting-started/invite-your-team',
        'getting-started/workspace-basics',
      ],
    },
    {
      type: 'category',
      label: 'Products',
      collapsed: false,
      items: [
        'products/identity',
        'products/support',
        'products/sales',
        'products/marketing',
        'products/threads',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      items: [
        'administration/billing',
        'administration/roles-and-permissions',
        'administration/audit-log',
      ],
    },
    'tutorials',
    {
      type: 'category',
      label: 'Enterprise Transformation',
      items: ['enterprise-transformation/objectives'],
    },
  ],
};

export default sidebars;
