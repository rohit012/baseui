/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable flowtype/require-valid-file-annotation */
/* eslint-env node */

const routes = [
  {
    title: 'Getting started',
    subNav: [
      {
        title: 'Home',
        itemId: '/',
        isGitHubEditDisabled: true,
      },
      {
        title: 'Setup',
        itemId: '/getting-started/setup',
      },
      {
        title: 'Learn Base Web',
        itemId: '/getting-started/learn',
      },
    ],
  },
  {
    title: 'Guides',
    subNav: [
      {
        title: 'Internationalization',
        itemId: '/guides/internationalization',
      },
      {
        title: 'Bidirectionality',
        itemId: '/guides/bidirectionality',
      },
      {
        title: 'Theming',
        itemId: '/guides/theming',
      },
      {
        title: 'Overrides',
        itemId: '/guides/understanding-overrides',
      },
      {
        title: 'API Cheat Sheet',
        itemId: '/cheat-sheet',
      },
    ],
  },
  {
    components: true,
    title: 'Components',
    subNav: [
      {
        title: 'Inputs',
        subNav: [
          {
            title: 'Button',
            itemId: '/components/button',
          },
          {
            title: 'Button Group',
            itemId: '/components/button-group',
          },
          {
            title: 'Checkbox',
            itemId: '/components/checkbox',
          },
          {
            title: 'Form Control',
            itemId: '/components/form-control',
          },
          {
            title: 'Input',
            itemId: '/components/input',
          },
          {
            title: 'Payment Card',
            itemId: '/components/payment-card',
          },
          {
            title: 'Phone Input',
            itemId: '/components/phone-input',
          },
          {
            title: 'Pin Code',
            itemId: '/components/pin-code',
          },
          {
            title: 'Radio',
            itemId: '/components/radio',
          },
          {
            title: 'Slider',
            itemId: '/components/slider',
          },
          {
            title: 'Textarea',
            itemId: '/components/textarea',
          },
        ],
      },
      {
        title: 'Pickers',
        subNav: [
          {
            title: 'Datepicker',
            itemId: '/components/datepicker',
          },
          {
            title: 'File Uploader',
            itemId: '/components/file-uploader',
          },
          {
            title: 'Menu',
            itemId: '/components/menu',
          },
          {
            title: 'Rating',
            itemId: '/components/rating',
          },
          {
            title: 'Select',
            itemId: '/components/select',
          },
        ],
      },
      {
        title: 'Navigation',
        subNav: [
          {
            title: 'Breadcrumbs',
            itemId: '/components/breadcrumbs',
          },
          {
            title: 'Header navigation',
            itemId: '/components/header-navigation',
          },
          {
            title: 'Link',
            itemId: '/components/link',
          },
          {
            title: 'Pagination',
            itemId: '/components/pagination',
          },
          {
            title: 'Side navigation',
            itemId: '/components/side-nav',
          },
          {
            title: 'Tab',
            itemId: '/components/tabs',
          },
        ],
      },
      {
        title: 'Content',
        subNav: [
          {
            title: 'Accordion',
            itemId: '/components/accordion',
          },
          {
            title: 'Avatar',
            itemId: '/components/avatar',
          },
          {
            title: 'Drag and Drop List',
            itemId: '/components/dnd-list',
          },
          {
            title: 'Heading',
            itemId: '/components/heading',
          },
          {
            title: 'Icon',
            itemId: '/components/icon',
          },
          {
            title: 'Table',
            itemId: '/components/table',
          },
          {
            title: 'Table Grid',
            itemId: '/components/table-grid',
          },
          {
            title: 'Data Table',
            itemId: '/components/unstable-data-table',
          },
          {
            title: 'Tag',
            itemId: '/components/tag',
          },
          {
            title: 'Typography',
            itemId: '/components/typography',
          },
        ],
      },
      {
        title: 'Progress & Validation',
        subNav: [
          {
            title: 'Notification',
            itemId: '/components/notification',
          },
          {
            title: 'ProgressBar',
            itemId: '/components/progress-bar',
          },
          {
            title: 'Progress steps',
            itemId: '/components/progress-steps',
          },
          {
            title: 'Spinner',
            itemId: '/components/spinner',
          },
          {
            title: 'Toast',
            itemId: '/components/toast',
          },
        ],
      },
      {
        title: 'Surfaces',
        subNav: [
          {
            title: 'Card',
            itemId: '/components/card',
          },
          {
            title: 'Drawer',
            itemId: '/components/drawer',
          },
          {
            title: 'Modal',
            itemId: '/components/modal',
          },
          {
            title: 'Popover',
            itemId: '/components/popover',
          },
          {
            title: 'Tooltip',
            itemId: '/components/tooltip',
          },
        ],
      },
      {
        title: 'Utility',
        subNav: [
          {
            title: 'AspectRatioBox',
            itemId: '/components/aspect-ratio-box',
          },
          {
            title: 'BaseProvider',
            itemId: '/components/base-provider',
          },
          {
            title: 'Block',
            itemId: '/components/block',
          },
          {
            title: 'FlexGrid',
            itemId: '/components/flex-grid',
          },
          {
            title: 'Layer',
            itemId: '/components/layer',
          },
          {
            title: 'UseStyletron',
            itemId: '/components/use-styletron',
          },
          {
            title: 'Styled',
            itemId: '/components/styled',
          },
          {
            title: 'Tokens',
            itemId: '/components/tokens',
          },
          {
            title: 'A11y Validator',
            itemId: '/components/unstable-a11y',
          },
        ],
      },
    ],
  },
  {
    title: 'Discover more',
    subNav: [
      {
        title: 'Versioning policy',
        itemId: '/discover-more/versioning-policy',
      },
      {
        title: 'Supported platforms',
        itemId: '/discover-more/supported-platforms',
      },
      {
        title: 'Comparison',
        itemId: '/discover-more/comparison',
      },
      {
        title: 'Roadmap',
        itemId: '/discover-more/roadmap',
      },
    ],
  },
  {
    title: 'Blog',
    itemId: '/blog',
    isGitHubEditDisabled: true,
  },
];

export default routes;
