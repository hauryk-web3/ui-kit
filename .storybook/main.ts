import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  stories: ['../src/**/*.stories.@(js|ts|mdx)'],
  staticDirs: ['../public'],
}
export default config;
