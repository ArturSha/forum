import { StyleDecorator } from '@/6shared/config/storybook/StyleDecorator/StyleDecorator';
import type { Preview } from '@storybook/react';
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '@/6shared/config/storybook/RouterDecorator/RouterDecorator';
import { SuspenseDecorator } from '@/6shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { Theme } from '@/6shared/const/theme';
import { FeaturesFlagsDecorator } from '@/6shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';
const preview: Preview = {
  parameters: {
    themes: {
      default: 'light',
      list: [
        { name: 'light', class: Theme.LIGHT, color: '#ffffff' },
        { name: 'dark', class: Theme.DARK, color: '#000000' },
        { name: 'orange', class: Theme.ORANGE, color: '#ffb005' },
      ],
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
    SuspenseDecorator,
    FeaturesFlagsDecorator({}),
  ],
};

export default preview;
