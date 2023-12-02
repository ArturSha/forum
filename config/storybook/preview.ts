import { StyleDecorator } from '6shared/config/storybook/StyleDecorator/StyleDecorator';
import type { Preview } from '@storybook/react';
import '1app/styles/index.scss'; // toDo ==> глобальные переменные пока что работают не так как хотелось(приходиться применять StyleDecorator)
import { ThemeDecorator } from '6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '1app/providers/ThemeProvider';
import { RouterDecorator } from '6shared/config/storybook/RouterDecorator/RouterDecorator';
import { SuspenseDecorator } from '6shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
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
  decorators: [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
    SuspenseDecorator,
  ],
};

export default preview;
