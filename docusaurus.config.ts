import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const siteUrl = process.env.AMEIDE_SITE_URL ?? 'https://ameideio.github.io';
const siteBaseUrl = (() => {
  const raw = process.env.AMEIDE_BASE_URL ?? '/io-ameide-learn/';
  if (raw === '/') {
    return raw;
  }
  return raw.endsWith('/') ? raw : `${raw}/`;
})();

const config: Config = {
  title: 'Ameide Learn',
  tagline: 'Walkthroughs, playbooks, and product guides for every Ameide user.',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
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
  plugins: ['docusaurus-plugin-sass'],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Ameide Learn',
      logo: {
        alt: 'Ameide Learn',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://ameideio.github.io/io-ameide-developers/',
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
              href: 'https://ameideio.github.io/io-ameide-developers/',
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
