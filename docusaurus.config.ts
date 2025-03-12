import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const githubURL : string = 'https://github.com/jakta-bdi';
const websiteURL : string = 'https://jakta-bdi.github.io';

const config: Config = {
  title: 'JaKtA',
  tagline: 'A BDI agent programming framework',
  favicon: 'img/favicon/favicon.ico',

  // Set the production url of your site here
  url: websiteURL,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jakta-bdi', // Usually your GitHub org/user name.
  projectName: 'jakta', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    function yamlLoader(context, options) {
      return {
        name: "yaml-loader",
        configureWebpack(config, isServer) {
          return {
            module: {
              rules: [
                {
                  test: /\.ya?ml$/,
                  use: "yaml-loader",
                },
              ],
            },
          };
        },
      };
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: websiteURL,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: websiteURL,
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/jakta-social.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    announcementBar: {
      id: 'underconstruction',
      content:
        'This website is currently under construction. Please check back later for updates.',
      backgroundColor: '#FFFF8F',
      textColor: 'black',
      isCloseable: false,
    },
    navbar: {
      hideOnScroll: false,
      title: 'JaKtA',
      logo: {
        alt: 'JaKtA Logo',
        src: 'img/jakta-logo.png',
        className: 'navbar-logo',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/blog',
          label: 'Blog', 
          position: 'left'
        },
        {
          to: '/about',
          label: 'About', 
          position: 'left'
        },
        {
          to: '/team',
          label: 'Team', 
          position: 'left'
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          href: githubURL,
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/jakta',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'X',
        //       href: 'https://x.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: githubURL,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} JaKtA, Org. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      defaultLanguage: 'kotlin',
    },
    algolia: {
      appId: 'VYWAYTYENC',
      apiKey: 'e71e39c23b9e037ad639a9295d3dad4c',
      indexName: 'jakta-bdiio',

      contextualSearch: true,

    },
    customFields: {
      githubURL: githubURL,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
