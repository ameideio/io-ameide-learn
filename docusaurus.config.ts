import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const siteUrl = process.env.AMEIDE_SITE_URL ?? 'https://learn.ameide.io';
const siteBaseUrl = (() => {
  const raw = process.env.AMEIDE_BASE_URL ?? '/';
  if (raw === '/') {
    return raw;
  }
  return raw.endsWith('/') ? raw : `${raw}/`;
})();

const config: Config = {
  title: 'Ameide Learn',
  tagline: 'Learn the platform, build your skills, run your practice.',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
    faster: true,
  },

  url: siteUrl,
  baseUrl: siteBaseUrl,
  organizationName: 'ameideio',
  projectName: 'io-ameide-learn',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/ameideio/io-ameide-learn/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.scss',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    [
      // Local Lunr-indexed search. Renders a `<SearchBar>` into the
      // navbar's `{ type: 'search' }` slot — we restyle that markup
      // below to match io-ameide-portal's `header-search` pattern.
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: '/docs',
        searchResultLimits: 8,
        searchBarShortcut: true,
        searchBarShortcutHint: false,
        searchBarPosition: 'right',
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: false,
    },
    navbar: {
      // Carbon HeaderName-style wordmark, matching io-ameide-portal's
      // `<HeaderName>ameide Portal</HeaderName>` pattern: lowercase
      // brand prefix + capitalized product, single string, no logo.
      title: 'ameide Learn',
      items: [
        {
          type: 'dropdown',
          label: 'Documentation',
          position: 'left',
          to: '/docs/documentation/overview',
          items: [
            {label: 'Overview', to: '/docs/documentation/overview'},
            {label: 'Strategy', to: '/docs/documentation/strategy'},
            {label: 'Architecture', to: '/docs/documentation/architecture'},
            {label: 'Delivery', to: '/docs/documentation/delivery'},
            {label: 'Change', to: '/docs/documentation/change'},
            {label: 'Support', to: '/docs/documentation/support'},
            {type: 'html', value: '<hr style="margin: 0.3rem 0;">'},
            {
              label: 'Getting started',
              to: '/docs/getting-started/what-is-ameide',
            },
            {
              label: 'Administration',
              to: '/docs/administration/identity-and-sso',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Training & Certifications',
          position: 'left',
          to: '/docs/training/overview',
          items: [
            {label: 'Overview', to: '/docs/training/overview'},
            {
              label: 'Learning paths',
              to: '/docs/training/paths/architect',
            },
            {label: 'Courses', to: '/docs/training/courses'},
            {
              label: 'Certifications',
              to: '/docs/training/certifications/foundations',
            },
            {label: 'Playbooks', to: '/docs/training/playbooks'},
          ],
        },
        {
          type: 'dropdown',
          label: 'Partners',
          position: 'left',
          to: '/docs/partners/overview',
          items: [
            {label: 'Overview', to: '/docs/partners/overview'},
            {
              label: 'Consulting Partners',
              to: '/docs/partners/consulting/overview',
            },
            {
              label: 'Technology Partners',
              to: '/docs/partners/technology/overview',
            },
          ],
        },
        {
          href: 'https://developers.ameide.io',
          label: 'Developers',
          position: 'right',
        },
        {
          href: 'https://github.com/ameideio/io-ameide-learn',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {label: 'Overview', to: '/docs/intro'},
            {label: 'Getting started', to: '/docs/getting-started/what-is-ameide'},
          ],
        },
        {
          title: 'Related sites',
          items: [
            {
              label: 'Developer portal',
              href: 'https://developers.ameide.io',
            },
            {
              label: 'ameide.io',
              href: 'https://io.ameide.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ameideio/io-ameide-learn',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Ameide. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
