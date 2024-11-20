import type { StorybookConfig } from '@storybook/react-webpack5'

const config: StorybookConfig = {
  stories: ['../src/lib/**/*.@(mdx|stories.@(js|jsx|ts|tsx))', '../src/lib/**/*.@(mdx|stories.@(tsx|jsx))'],

  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@nx/react/plugins/storybook',
    '@storybook/addon-react-native-web',
    '@chromatic-com/storybook'
  ],

  docs: {
    defaultName: 'Documentation'
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
}

export default config

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
