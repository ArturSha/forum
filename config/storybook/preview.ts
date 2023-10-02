import { StyleDecorator } from '../../src/6shared/config/storybook/StyleDecorator/StyleDecorator';
import type { Preview } from '@storybook/react';
import '../../src/1app/styles/index.scss'; // toDo ==> глобальные переменные пока что работают не так как хотелось(приходиться применять StyleDecorator)
import { ThemeDecorator } from '../../src/6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/1app/providers/ThemeProvider';
import { RouterDecorator } from '../../src/6shared/config/storybook/RouterDecorator/RouterDecorator';
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export default preview;
