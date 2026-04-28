import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  documentationSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Documentation',
      collapsed: false,
      items: [
        'documentation/overview',
        'documentation/strategy',
        'documentation/architecture',
        'documentation/delivery',
        'documentation/change',
        'documentation/support',
      ],
    },
    {
      type: 'category',
      label: 'Getting started',
      items: [
        'getting-started/what-is-ameide',
        'getting-started/invite-your-team',
        'getting-started/workspace-basics',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      items: [
        'administration/identity-and-sso',
        'administration/roles-and-permissions',
        'administration/billing',
        'administration/audit-log',
        'administration/threads',
      ],
    },
  ],

  trainingSidebar: [
    'training/overview',
    {
      type: 'category',
      label: 'Learning paths',
      collapsed: false,
      items: [
        'training/paths/architect',
        'training/paths/consultant',
        'training/paths/project-manager',
        'training/paths/administrator',
      ],
    },
    'training/courses',
    {
      type: 'category',
      label: 'Certifications',
      items: [
        'training/certifications/foundations',
        'training/certifications/architect',
        'training/certifications/consultant',
      ],
    },
    'training/playbooks',
  ],

  partnersSidebar: [
    'partners/overview',
    {
      type: 'category',
      label: 'Consulting Partners',
      collapsed: false,
      items: [
        'partners/consulting/overview',
        'partners/consulting/sell',
        'partners/consulting/deliver',
        'partners/consulting/service',
        'partners/consulting/people',
        'partners/consulting/admin',
      ],
    },
    {
      type: 'category',
      label: 'Technology Partners',
      collapsed: false,
      items: [
        'partners/technology/overview',
        'partners/technology/build',
        'partners/technology/list',
        'partners/technology/certify',
        'partners/technology/co-sell',
      ],
    },
  ],
};

export default sidebars;
